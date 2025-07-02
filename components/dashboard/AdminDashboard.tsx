"use client";

import { useState, useEffect, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Mail,
  Eye,
  Trash2,
  Search,
  Filter,
  MailOpen,
  Calendar,
  User,
  MessageSquare,
  Settings,
  LogOut,
  Loader2,
  RefreshCw,
} from "lucide-react";
import {
  getContactMessages,
  getMessageStats,
  markMessageAsRead,
  deleteContactMessage,
  searchContactMessages,
  type ContactMessage,
} from "@/lib/actions/contact-actions";

interface MessageStats {
  total: number;
  unread: number;
  read: number;
  today: number;
}

export default function AdminDashboard() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [stats, setStats] = useState<MessageStats>({
    total: 0,
    unread: 0,
    read: 0,
    today: 0,
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<"all" | "read" | "unread">(
    "all"
  );
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);
  const [isPending, startTransition] = useTransition();

  // Load initial data
  useEffect(() => {
    loadData();
  }, []);

  // Search and filter when terms change
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      handleSearch();
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [searchTerm, filterStatus]);

  const loadData = async () => {
    setIsLoading(true);
    try {
      const [messagesData, statsData] = await Promise.all([
        getContactMessages(),
        getMessageStats(),
      ]);
      setMessages(messagesData);
      setStats(statsData);
    } catch (error) {
      console.error("Error loading data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = async () => {
    try {
      const searchResults = await searchContactMessages(
        searchTerm,
        filterStatus
      );
      setMessages(searchResults);
    } catch (error) {
      console.error("Error searching messages:", error);
    }
  };

  const handleMarkAsRead = async (messageId: string) => {
    startTransition(async () => {
      const result = await markMessageAsRead(messageId);
      if (result.success) {
        // Update local state
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === messageId ? { ...msg, isRead: true } : msg
          )
        );
        setStats((prev) => ({
          ...prev,
          unread: prev.unread - 1,
          read: prev.read + 1,
        }));
      }
    });
  };

  const handleDeleteMessage = async (messageId: string) => {
    startTransition(async () => {
      const result = await deleteContactMessage(messageId);
      if (result.success) {
        // Update local state
        const messageToDelete = messages.find((msg) => msg.id === messageId);
        setMessages((prev) => prev.filter((msg) => msg.id !== messageId));
        setStats((prev) => ({
          total: prev.total - 1,
          unread: messageToDelete?.isRead ? prev.unread : prev.unread - 1,
          read: messageToDelete?.isRead ? prev.read - 1 : prev.read,
          today:
            prev.today -
            (new Date(messageToDelete?.createdAt || "").toDateString() ===
            new Date().toDateString()
              ? 1
              : 0),
        }));
      }
    });
  };

  const handleRefresh = () => {
    loadData();
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <Loader2 className="w-6 h-6 animate-spin text-[#F17105]" />
          <span className="text-gray-600">Loading dashboard...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-[#F17105]">DSS Admin</h1>
              <Badge
                variant="secondary"
                className="bg-[#F17105]/10 text-[#F17105]"
              >
                Dashboard
              </Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={handleRefresh}
                disabled={isPending}
              >
                <RefreshCw
                  className={`w-4 h-4 mr-2 ${isPending ? "animate-spin" : ""}`}
                />
                Refresh
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
              <Button variant="outline" size="sm">
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Messages
              </CardTitle>
              <Mail className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#F17105]">
                {stats.total}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Unread Messages
              </CardTitle>
              <MailOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">
                {stats.unread}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Read Messages
              </CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                {stats.read}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Today's Messages
              </CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">
                {stats.today}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Messages Management */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MessageSquare className="w-5 h-5 text-[#F17105]" />
              <span>Contact Messages</span>
            </CardTitle>
            <CardDescription>
              Manage and respond to customer inquiries
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search messages..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-gray-400" />
                <select
                  value={filterStatus}
                  onChange={(e) =>
                    setFilterStatus(e.target.value as "all" | "read" | "unread")
                  }
                  className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#F17105] focus:border-transparent"
                >
                  <option value="all">All Messages</option>
                  <option value="unread">Unread</option>
                  <option value="read">Read</option>
                </select>
              </div>
            </div>

            {/* Messages Table */}
            <div className="border rounded-lg">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Status</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {messages.length === 0 ? (
                    <TableRow>
                      <TableCell
                        colSpan={6}
                        className="text-center py-8 text-gray-500"
                      >
                        No messages found
                      </TableCell>
                    </TableRow>
                  ) : (
                    messages.map((message) => (
                      <TableRow
                        key={message.id}
                        className={!message.isRead ? "bg-blue-50" : ""}
                      >
                        <TableCell>
                          <Badge
                            variant={
                              message.isRead ? "secondary" : "destructive"
                            }
                          >
                            {message.isRead ? "Read" : "Unread"}
                          </Badge>
                        </TableCell>
                        <TableCell className="font-medium">
                          {message.name}
                        </TableCell>
                        <TableCell>{message.email}</TableCell>
                        <TableCell>{message.phone || "N/A"}</TableCell>
                        <TableCell>
                          {new Date(message.createdAt).toLocaleDateString()}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => {
                                    setSelectedMessage(message);
                                    if (!message.isRead) {
                                      handleMarkAsRead(message.id);
                                    }
                                  }}
                                >
                                  <Eye className="w-4 h-4" />
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-2xl">
                                <DialogHeader>
                                  <DialogTitle className="flex items-center space-x-2">
                                    <User className="w-5 h-5 text-[#F17105]" />
                                    <span>Message from {message.name}</span>
                                  </DialogTitle>
                                  <DialogDescription>
                                    Received on{" "}
                                    {new Date(
                                      message.createdAt
                                    ).toLocaleString()}
                                  </DialogDescription>
                                </DialogHeader>
                                <div className="space-y-4">
                                  <div className="grid grid-cols-2 gap-4">
                                    <div>
                                      <label className="text-sm font-medium text-gray-700">
                                        Name
                                      </label>
                                      <p className="text-sm text-gray-900">
                                        {message.name}
                                      </p>
                                    </div>
                                    <div>
                                      <label className="text-sm font-medium text-gray-700">
                                        Email
                                      </label>
                                      <p className="text-sm text-gray-900">
                                        {message.email}
                                      </p>
                                    </div>
                                  </div>
                                  {message.phone && (
                                    <div>
                                      <label className="text-sm font-medium text-gray-700">
                                        Phone
                                      </label>
                                      <p className="text-sm text-gray-900">
                                        {message.phone}
                                      </p>
                                    </div>
                                  )}
                                  <div>
                                    <label className="text-sm font-medium text-gray-700">
                                      Message
                                    </label>
                                    <div className="mt-1 p-3 bg-gray-50 rounded-md">
                                      <p className="text-sm text-gray-900 whitespace-pre-wrap">
                                        {message.message}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </DialogContent>
                            </Dialog>

                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="text-red-600 hover:text-red-700 bg-transparent"
                                  disabled={isPending}
                                >
                                  <Trash2 className="w-4 h-4" />
                                </Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>
                                    Delete Message
                                  </AlertDialogTitle>
                                  <AlertDialogDescription>
                                    Are you sure you want to delete this message
                                    from {message.name}? This action cannot be
                                    undone.
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                                  <AlertDialogAction
                                    onClick={() =>
                                      handleDeleteMessage(message.id)
                                    }
                                    className="bg-red-600 hover:bg-red-700"
                                    disabled={isPending}
                                  >
                                    {isPending ? (
                                      <>
                                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                        Deleting...
                                      </>
                                    ) : (
                                      "Delete"
                                    )}
                                  </AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

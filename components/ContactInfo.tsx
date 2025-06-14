import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-green-700">
            Get in Touch
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-start space-x-4">
            <MapPin className="w-6 h-6 text-green-600 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900">Office Location</h3>
              <p className="text-gray-600">100 S Main St, New York, NY</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Phone className="w-6 h-6 text-green-600 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900">Phone Number</h3>
              <p className="text-gray-600">(555) 123-4567</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Mail className="w-6 h-6 text-green-600 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900">Email Address</h3>
              <p className="text-gray-600">contact@DSS.com</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Clock className="w-6 h-6 text-green-600 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900">Business Hours</h3>
              <p className="text-gray-600">Monday - Friday: 08:00 - 18:00</p>
              <p className="text-gray-600">Saturday: 09:00 - 16:00</p>
              <p className="text-gray-600">Sunday: Closed</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Why Choose DSS?</h3>
          <ul className="space-y-2 text-gray-600">
            <li>• 15+ years of experience</li>
            <li>• Licensed and insured professionals</li>
            <li>• Free consultations and estimates</li>
            <li>• Sustainable and eco-friendly practices</li>
            <li>• 100% satisfaction guarantee</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

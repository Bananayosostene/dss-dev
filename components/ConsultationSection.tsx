import { Button } from "@/components/ui/button"

export default function ConsultationSection() {
  return (
    <section
      className="relative py-[10rem] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/images/consultation-bg.png)" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-2xl font-bold mb-8 leading-tight">
            TRANSFORM YOUR GARDEN - CONTACT US FOR A FREE CONSULTATION
          </h2>
          <Button
            size="lg"
            className="bg-[#354E33] hover:bg-green-700 text-white px-8 py-4 text-lg"
          >
            FREE CONSULTATION
          </Button>
        </div>
      </div>
    </section>
  );
}

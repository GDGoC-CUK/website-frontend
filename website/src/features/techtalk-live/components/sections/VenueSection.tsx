import { ExternalLink, MapPin } from "lucide-react";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { SectionTitle } from "../ui/SectionTitle";
import venueImage from "../../assets/k.png";

export function VenueSection() {
  return (
    <section id="venue" className="mb-24">
      <SectionTitle subtitle="GETTING THERE">The Venue</SectionTitle>
      <Card className="p-0 overflow-hidden">
        <div className="h-48 bg-neutral-900 relative">
          <img src={venueImage} alt="K" className="w-full h-full object-cover opacity-50" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-google-red flex items-center justify-center animate-bounce shadow-2xl shadow-google-red/50">
              <MapPin className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
        <div className="p-6">
          <h4 className="font-bold text-xl mb-2">강의실 개별 안내</h4>
          <p className="text-neutral-400 text-sm mb-6">
            경기 부천시 원미구 지봉로 43 <br />
            가톨릭대학교 성심교정
          </p>
          <a
            href="https://map.kakao.com/?rt=,,456286,1107431&rt1=&rt2=가톨릭대학교 성심교정&rtIds=,11344864"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Button variant="outline" className="w-full">
              Open in Maps <ExternalLink className="w-4 h-4" />
            </Button>
          </a>
        </div>
      </Card>
    </section>
  );
}

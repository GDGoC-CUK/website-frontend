import { Card } from "../ui/Card";

export function FinalCtaSection() {
  return (
    <section className="mb-20">
      <Card className="bg-gradient-to-br from-google-blue/20 to-google-red/20 border-white/10 text-center py-12">
        <h2 className="text-2xl font-black mb-4">READY TO JOIN?</h2>
        <p className="text-neutral-300 max-w-xs mx-auto">
          사전 신청을 하지 않을 경우, 현장 참여가
          <br />
          어렵습니다. 지금 바로 신청하세요!
        </p>
      </Card>
    </section>
  );
}

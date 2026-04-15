import { Button } from "./ui/Button";

const APPLY_URL = "https://forms.gle/ytojficW9h34AMMc7";

export function ApplyButton({ className = "", children = "참여 신청" }) {
  return (
    <a
      href={APPLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block"
    >
      <Button className={className}>
        {children}
      </Button>
    </a>
  );
}
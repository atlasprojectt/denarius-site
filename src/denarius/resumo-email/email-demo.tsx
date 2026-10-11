import { DigestMessage } from "./digest-message";
import { emailCopy } from "./email-copy";
import { MailMock } from "./mail-mock";

// The weekly digest opened in the webmail mock, as one piece over plain props,
// so the landing can render it live from baked data instead of a screenshot.

export type EmailDemoProps = {
  monthLabel: string;
  /** The digest body, one entry per paragraph (digestParagraphs). */
  paragraphs: string[];
  sender: string;
  senderAddress: string;
  /** e.g. "sex., 16 de out., 08:00 (há 2 dias)". */
  date: string;
  appUrl: string;
};

export function EmailDemo({ monthLabel, paragraphs, sender, senderAddress, date, appUrl }: EmailDemoProps) {
  return (
    <MailMock subject={emailCopy.subject(monthLabel)} sender={sender} senderAddress={senderAddress} date={date}>
      <DigestMessage monthLabel={monthLabel} paragraphs={paragraphs} appUrl={appUrl} />
    </MailMock>
  );
}

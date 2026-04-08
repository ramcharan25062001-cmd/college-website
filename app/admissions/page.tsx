import { redirect } from "next/navigation";

// Page blocked — /admissions endpoint not yet approved by client.
// Original code preserved in page.tsx.bak for future use.
export default function AdmissionsPage() {
  redirect("/#admissions");
}

import { Button } from "@/components/ui/button";
import { UserButton } from '@clerk/nextjs'

export default function Home() {
  return (
    <main className="">
      <Button size="default" variant="default">
        Click
      </Button>
      This is an authenticated screen
      <UserButton />
    </main>
  );
}

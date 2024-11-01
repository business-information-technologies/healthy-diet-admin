import { signIn } from "@/auth"
import { Button } from "../ui/button"


 
export function SignIn({
    provider
}:{
    provider: string
}) {
  return (
    <form
      action={async () => {
        "use server"
        await signIn(provider)
      }}
    >
      <Button type="submit" variant={"outline"} size={"lg"} className="rounded-2xl w-full py-6 font-semibold text-white border-venetianLace backdrop-filter backdrop-blur-md">
        {
            provider === "google" && <>Continue with Google</>
        }
      </Button>
    </form>
  )
}
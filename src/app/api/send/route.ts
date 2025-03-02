import { Resend } from "resend";

const resend = new Resend("re_KZi4VYaK_FA5gtTiusAS4npGwF9Rf1Z55");

export async function POST() {
    await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: ["ronykax@gmail.com"],
        subject: "Hello world",
        html: "<h1>Hello world</h1>",
    });
}

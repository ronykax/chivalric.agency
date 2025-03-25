import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const data = await req.formData();

        const first = data.get("first-name")?.toString();
        const last = data.get("last-name")?.toString();

        const email = data.get("email")?.toString();
        const company = data.get("company")?.toString();
        const budget = data.get("budget")?.toString();
        const details = data.get("details")?.toString();

        const webhookURL = process.env.DISCORD_WEBHOOK_URL || "";

        const payload = {
            content: `A submission has just been made <@1339042852205891635>

> ### FIRST NAME:
- ${first}
> ### LAST NAME:
- ${last}
> ### COMPANY:
- ${company}
> ### EMAIL:
- ${email}
> ### BUDGET:
- ${budget}
> ### DETAILS:
- ${details}`,

        };

        await fetch(webhookURL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        // return NextResponse.json({ message: "Success" }, { status: 200 });
        return NextResponse.redirect(new URL("/"));
    } catch (err) {
        console.error(err);
        // return NextResponse.json({ message: "Error" }, { status: 500 });
        return NextResponse.redirect(new URL("/"));
        // return NextResponse.redirect("/");
    }
}

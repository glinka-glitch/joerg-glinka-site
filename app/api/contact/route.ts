import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const requests = new Map<
  string,
  { count: number; firstRequest: number }
>();

export async function POST(req: Request) {
  try {
const forwardedFor =
  req.headers.get("x-forwarded-for");

const ip =
  forwardedFor?.split(",")[0]?.trim() ||
  "unknown";

    const body = await req.json();
    const now = Date.now();
const windowMs = 15 * 60 * 1000;
const maxRequests = 5;

const existing = requests.get(ip);

if (!existing) {
  requests.set(ip, {
    count: 1,
    firstRequest: now,
  });
} else {
  if (now - existing.firstRequest > windowMs) {
    requests.set(ip, {
      count: 1,
      firstRequest: now,
    });
  } else {
    existing.count += 1;

    if (existing.count > maxRequests) {
      return NextResponse.json(
        { success: false },
        { status: 429 }
      );
    }
  }
}

    const {
  name,
  email,
  message,
  website,
  startedAt,
} = body;

    // Honeypot
    if (website) {
      return NextResponse.json(
        { success: true },
        { status: 200 }
      );
    }

    // Zeitprüfung gegen Bots
const secondsOnPage =
  (Date.now() - Number(startedAt)) / 1000;

if (secondsOnPage < 5) {
  return NextResponse.json(
    { success: false },
    { status: 429 }
  );
}

    // Mindestprüfung
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false },
        { status: 400 }
      );
    }

    const emailRegex =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailRegex.test(email)) {
  return NextResponse.json(
    { success: false },
    { status: 400 }
  );
}

if (message.length > 5000) {
  return NextResponse.json(
    { success: false },
    { status: 400 }
  );
}
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const html = `
      <div style="font-family:Arial,sans-serif;padding:24px;max-width:700px">
        <h2 style="color:#d946ef">
          Neue Anfrage über glinka.tech
        </h2>

        <hr />

        <p>
          <strong>Name:</strong><br/>
          ${name}
        </p>

        <p>
          <strong>E-Mail:</strong><br/>
          ${email}
        </p>

        <p>
          <strong>Nachricht:</strong><br/>
          ${message.replace(/\n/g, "<br/>")}
        </p>
      </div>
    `;

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_TO,
      replyTo: email,
      subject: `Neue Anfrage von ${name}`,
      html,
    });

    return NextResponse.json({
      success: true,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}



# EmailJS Setup Instructions for Contact Form

The contact form is configured to send emails to **elexcreatives@gmail.com** using EmailJS with auto-reply functionality.

## Setup Steps:

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)

### 2. Add Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail**
4. Connect your **elexcreatives@gmail.com** account
5. Copy the **Service ID** (e.g., `service_abc123`)

### 3. Create Email Template (For receiving messages)
1. Go to **Email Templates**
2. Click **Create New Template**
3. Template Name: "Contact Form Submission"
4. Configure template:

**Subject:** `New Contact Form Message from {{from_name}}`

**Content:**
```
You have received a new message from your website contact form:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This email was sent from your ElexCreatives website contact form.
```

5. Copy the **Template ID** (e.g., `template_xyz789`)

### 4. Create Auto-Reply Template (For confirmation email to user)
1. Create another template
2. Template Name: "Contact Form Auto Reply"
3. **IMPORTANT:** Change "To Email" to `{{from_email}}` (this sends to the user who filled the form)
4. Configure template:

**Subject:** `Thank you for contacting Elex Creatives`

**Content:**
```
Hi {{from_name}},

Thank you for reaching out to us! We've received your message and will get back to you shortly.

Here's a copy of your message:
{{message}}

Best regards,
Alex & Elif
Elex Creatives Team

---
If you didn't send this message, please ignore this email.
```

5. Copy this **Template ID** as well (e.g., `template_reply_abc`)

### 5. Get Public Key
1. Go to **Account** → **General**
2. Copy your **Public Key** (e.g., `your_public_key_here`)

### 6. Update Your Code
Replace the placeholder values in `app/page.tsx` (around line 326-328):

```typescript
const serviceId = 'service_abc123';        // Your Service ID
const templateId = 'template_xyz789';      // Your main template ID
const publicKey = 'your_public_key_here';  // Your Public Key
```

### 7. Add Auto-Reply (Optional but Recommended)
To send a confirmation email to users, add another emailjs.send call in the handleSubmit function:

```typescript
// After the first email.send() succeeds
await emailjs.send(
  serviceId,
  'template_reply_abc',  // Your auto-reply template ID
  templateParams,
  publicKey
);
```

### 8. Test the Form
1. Save your changes and run the site
2. Fill out the contact form with a test email
3. Check:
   - You receive an email at elexcreatives@gmail.com
   - The user receives a confirmation email
   - Success notification appears on the site

## Email Quota
- **Free Plan**: 200 emails/month
- **Personal Plan**: 1,000 emails/month ($7/month if needed)

## Troubleshooting
- If emails aren't sending, check browser console for errors
- Verify all IDs are correct (Service ID, Template IDs, Public Key)
- Make sure Gmail service is properly connected
- Check EmailJS dashboard for error logs

## Security Note
The Public Key is safe to expose in client-side code. Service and Template IDs are also meant to be public.

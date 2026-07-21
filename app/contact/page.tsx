"use client";
import { useState, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Alert,
  AlertDescription,
} from "@/components/ui/alert";
import { Mail, MessageSquare, Building, CheckCircle2 } from "lucide-react";
import { useSearchParams } from "next/navigation";
import Loading from "@/components/ui/State/Loading";
import { T, useGT } from "gt-next";

function ContactPage() {
  const searchParams = useSearchParams();
  const subjectParam = searchParams.get("subject");

  const t = useGT();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: subjectParam || "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactMethods = [
    // {
    //   icon: Mail,
    //   title: t("Email Us"),
    //   description: t("support@yourplatform.com"),
    //   detail: t("We typically respond within 24 hours"),
    // },
    {
      icon: MessageSquare,
      title: t("General Inquiries"),
      description: t("Questions about our platform"),
      detail: t("Use the form below"),
    },
    {
      icon: Building,
      title: t("Partnership Opportunities"),
      description: t("Interested in becoming a sponsor?"),
      detail: t("Select Partnership Opportunity in subject section"),
    },
  ];

  return (
    <main className="min-h-screen py-12 px-4 mt-14">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <T>
            <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions, feedback, or partnership inquiries? We'd love to
              hear from you.
            </p>
          </T>
        </header>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Methods */}
          <div className="lg:col-span-1 space-y-6">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card key={index}>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <Icon size={24} className="text-primary" />
                    </div>
                    <CardTitle className="text-lg">{method.title}</CardTitle>
                    <CardDescription className="font-semibold text-foreground">
                      {method.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {method.detail}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <T>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as
                    possible
                  </CardDescription>
                </T>
              </CardHeader>
              <CardContent>
                {isSubmitted && (
                  <Alert className="mb-6 border-green-500/50 bg-green-500/10">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <T>
                      <AlertDescription className="text-green-700 dark:text-green-400">
                        Thank you! Your message has been sent successfully. We'll
                        respond within 24 hours.
                      </AlertDescription>
                    </T>
                  </Alert>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name">{t("Name")} *</Label>
                    <Input
                      id="name"
                      placeholder={t("Your full name")}
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email">{t("Email")} *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={t("your.email@example.com")}
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <Label htmlFor="subject">{t("Subject")} *</Label>
                    <Select
                      value={formData.subject}
                      onValueChange={(value) =>
                        setFormData({ ...formData, subject: value })
                      }
                      required
                    >
                      <SelectTrigger id="subject">
                        <SelectValue placeholder={t("Select a subject")} />
                      </SelectTrigger>
                      <SelectContent>
                        <T>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="support">
                            Technical Support
                          </SelectItem>
                          <SelectItem value="partnership">
                            Partnership Opportunity
                          </SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                          <SelectItem value="report">Report an Issue</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </T>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message">{t("Message")} *</Label>
                    <Textarea
                      id="message"
                      placeholder={t("Tell us how we can help...")}
                      className="min-h-32 resize-none"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                    />
                    <p className="text-xs text-muted-foreground">
                      {t("Please provide as much detail as possible")}
                    </p>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? t("Sending...") : t("Send Message")}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
export default function PageWrapper() {
  return (
    <Suspense fallback={<Loading />}>
      <ContactPage />
    </Suspense>
  );
}

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HelpCircle, BookOpen, Users, Shield, Mail } from "lucide-react";
import Link from "next/link";

export default function SupportPage() {
  const faqs = [
    {
      question: "How do I create an account?",
      answer:
        "You can create an account by clicking the 'Sign Up' button in the top right corner. We support Google sign-in for quick and secure registration.",
    },
    {
      question: "How do I add books to my reading list?",
      answer:
        "Navigate to any book page and click the 'Add to Reading List' button. You can organize your books into custom shelves from your profile dashboard.",
    },
    {
      question: "Can I share my book reviews with friends?",
      answer:
        "Yes! All reviews are public by default, but you can adjust your privacy settings to control who sees your content. You can share review links directly or via social media.",
    },
    {
      question: "What are sponsor badges?",
      answer:
        "Sponsor badges are recognition awards you can earn by supporting our platform partners. Visit sponsor profiles and click 'Support this partner' to receive their badge on your profile.",
    },
    {
      question: "How do I change my profile settings?",
      answer:
        "Go to your dashboard and click 'Edit Profile'. You can update your name, bio, avatar, privacy settings, and more.",
    },
    {
      question: "Are my reading habits tracked or sold?",
      answer:
        "No. We respect your privacy. Your reading data is private and never sold to third parties. We only use anonymized aggregate data to improve our recommendations.",
    },
    {
      question: "How can I report inappropriate content?",
      answer:
        "Click the three-dot menu on any post or review and select 'Report'. Our moderation team reviews all reports within 24 hours.",
    },
    {
      question: "Can I delete my account?",
      answer:
        "Yes, you can permanently delete your account from Settings > Account > Delete Account. This action cannot be undone and all your data will be removed.",
    },
  ];

  const supportCategories = [
    {
      icon: BookOpen,
      title: "Using the Platform",
      description:
        "Learn how to find books, create lists, and engage with the community",
      link: "/support/getting-started",
    },
    {
      icon: Users,
      title: "Account & Profile",
      description:
        "Manage your account settings, privacy, and profile information",
      link: "/support/account",
    },
    {
      icon: Shield,
      title: "Safety & Privacy",
      description:
        "Understand our privacy policy, data handling, and safety features",
      link: "/support/privacy",
    },
    {
      icon: HelpCircle,
      title: "Troubleshooting",
      description: "Solutions for common technical issues and bugs",
      link: "/support/troubleshooting",
    },
  ];

  return (
    <main className="min-h-screen py-12 px-4 mt-14">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">How Can We Help?</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions or reach out to our support team
          </p>
        </header>

        {/* Quick Links */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {supportCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href={category.link}>
                    <Button variant="ghost" className="w-full">
                      Learn More →
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <Accordion className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Contact CTA */}
        <Card className="bg-muted/50">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Still Need Help?</CardTitle>
            <CardDescription>
              Our support team is here to assist you
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center flex justify-center">
            <Link href="/contact">
              <Button size="lg">
                <Mail size={18} className="mr-2" />
                Contact Support
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

import Link from "next/link";
import { Locale, getTranslations } from "@/i18n/config";
import styles from "./page.module.css";

type Props = {
  params: { lang: Locale };
};

export default async function LandingPage(
  {params,
}: Props) {

  const { lang } = await Promise.resolve(params);
  const translations = await getTranslations(lang);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center py-20 px-6">
          <h1 className="text-4xl font-bold text-primary mb-4">
            {translations.welcome}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            {translations.description}
          </p>
          <div className="mt-6 flex gap-4">
            <Link href="/get-started">
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
                {translations.getStarted || "Get Started"}
              </button>
            </Link>
            <Link href="/learn-more">
              <button className="px-6 py-3 border border-border text-muted-foreground rounded-md hover:bg-muted">
                {translations.learnMore || "Learn More"}
              </button>
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-6 bg-muted">
          <h2 className="text-3xl font-bold text-center mb-8">{translations.features || "Features"}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-card rounded-lg shadow">
              <h3 className="text-xl font-semibold text-primary mb-2">{translations.legal || "Legal Assistance"}</h3>
              <p className="text-muted-foreground">
                {translations.legalDesc || "Get help with business registration, contracts, and compliance."}
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow">
              <h3 className="text-xl font-semibold text-primary mb-2">{translations.financial || "Financial Planning"}</h3>
              <p className="text-muted-foreground">
                {translations.financialDesc || "Manage your finances with budgeting tools and expert advice."}
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow">
              <h3 className="text-xl font-semibold text-primary mb-2">{translations.marketing || "Marketing Strategies"}</h3>
              <p className="text-muted-foreground">
                {translations.marketingDesc || "Boost your brand with tailored marketing plans and tools."}
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
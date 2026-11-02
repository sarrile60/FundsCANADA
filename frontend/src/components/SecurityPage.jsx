// SecurityPage — Anti-fraud / recovery-scam awareness page.
// THE single biggest legitimacy signal: a long, detailed warning about scams
// that a real recovery scammer would NEVER publish.
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ShieldAlert, AlertTriangle, X, CheckCircle2 } from "lucide-react";
import Logo from "./Logo";
import Footer from "./Footer";
import { useI18n } from "../i18n";

export default function SecurityPage() {
  const { t, lang } = useI18n();
  const isIt = lang === "it";

  const redFlags = isIt ? [
    "Promette il recupero al 100% in pochi giorni.",
    "Chiede una 'tassa di sblocco', 'commissione AML', 'gas fee' o 'certificato' anticipato.",
    "Si presenta come avvocato, agente della polizia, funzionario governativo o di Interpol senza prove verificabili.",
    "Ti contatta su WhatsApp o Telegram da un numero estero.",
    "Ti chiede di installare AnyDesk, TeamViewer, RustDesk o altri software di accesso remoto.",
    "Ti chiede la tua seed phrase, private key, password bancaria o codici OTP.",
    "Mostra dashboard finte con 'fondi recuperati' e ti chiede di pagare per ritirarli.",
    "Ti dice di non parlarne con la banca o con la polizia.",
    "Pretende il pagamento solo in crypto, gift card, Western Union, Interac e-Transfer o ricariche.",
    "Ha un sito web con dominio recente (<6 mesi), nessuna informazione legale, nessuna sede fisica verificabile.",
  ] : [
    "Promises 100% recovery within days.",
    "Asks for an upfront 'unlock fee', 'AML fee', 'gas fee', or 'certificate'.",
    "Claims to be a lawyer, RCMP officer, government official, or Interpol agent without verifiable proof.",
    "Contacts you on WhatsApp or Telegram from a foreign number.",
    "Asks you to install AnyDesk, TeamViewer, RustDesk, or any remote-access software.",
    "Asks for your seed phrase, private key, banking password, or OTP codes.",
    "Shows fake dashboards with 'recovered funds' and asks you to pay to withdraw them.",
    "Tells you not to talk to your bank or the police.",
    "Demands payment only in crypto, gift cards, Western Union, Interac e-Transfer, or prepaid cards.",
    "Has a website with a recent domain (<6 months), no legal information, no verifiable physical address.",
  ];

  const safeChecks = isIt ? [
    "Verifica sempre l'identità di chi ti contatta tramite i canali ufficiali della presunta organizzazione.",
    "Non condividere mai password, codici OTP, seed phrase o private key.",
    "Non installare software di accesso remoto su richiesta di sconosciuti.",
    "Conserva tutte le prove originali: email, chat, screenshot, ricevute, transaction hash, numeri di conto.",
    "Segnala alla polizia locale o alla RCMP.",
    "Contatta la tua banca per richiedere recall o chargeback nei tempi del circuito.",
    "Per truffe di investimento: segnala alle autorità di regolamentazione dei valori mobiliari (CSA/OSC/AMF/BCSC).",
    "Per truffe crypto: contatta l'exchange esposto e prepara una richiesta di freeze.",
    "Diffida di chiunque ti prometta recuperi miracolosi a fronte di pagamenti anticipati.",
    "Consultati con un avvocato esperto in frodi finanziarie prima di firmare contratti o effettuare pagamenti.",
  ] : [
    "Always verify the identity of anyone contacting you through the official channels of the claimed organization.",
    "Never share passwords, OTP codes, seed phrases, or private keys.",
    "Do not install remote-access software at the request of strangers.",
    "Keep all original evidence: emails, chats, screenshots, receipts, transaction hashes, account numbers.",
    "File a report with the Canadian Anti-Fraud Centre (CAFC) at antifraudcentre-centreantifraude.ca and your local police.",
    "Contact your bank to request a recall or chargeback within the scheme's deadlines.",
    "For investment scams: report to your provincial securities regulator (CSA/OSC/AMF/BCSC) at aretheyregistered.ca.",
    "For crypto scams: contact the exposed exchange and prepare a freeze request.",
    "Be suspicious of anyone promising miraculous recoveries in exchange for upfront payments.",
    "Consult a lawyer experienced in financial fraud before signing contracts or making payments.",
  ];

  return (
    <div className="aif-app-bg min-h-screen relative">
      <div className="aif-grid-overlay absolute inset-0 pointer-events-none"/>
      <div className="relative">
        <header className="border-b border-[var(--aif-line)] bg-[rgba(6,11,24,0.92)]">
          <div className="max-w-4xl mx-auto px-5 lg:px-8 h-16 flex items-center justify-between gap-4">
            <Link to="/" className="aif-btn-ghost !py-2 !text-sm inline-flex items-center gap-2">
              <ArrowLeft size={14}/> {t("nav.back")}
            </Link>
            <Link to="/"><Logo/></Link>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-5 lg:px-8 py-12 md:py-16">
          <div className="aif-chip mb-4 !border-[#FFB454]/40 !text-[#FFB454]">
            <ShieldAlert size={12}/> {isIt ? "Avvertimento truffe" : "Scam awareness"}
          </div>
          <h1 className="section-title">
            {isIt ? "Riconoscere le truffe di recupero fondi" : "Recognising recovery scams"}
          </h1>
          <p className="text-[var(--aif-text-dim)] mt-5 leading-relaxed max-w-3xl text-[15px]">
            {isIt
              ? "Le 'truffe di recupero' sono uno dei reati più cinici: prendono di mira persone già state truffate una volta, promettendo di recuperare i fondi persi a fronte di pagamenti anticipati. Sono il secondo livello della stessa rete criminale. Questa pagina ti aiuta a riconoscerle ed evitarle."
              : "Recovery scams are one of the most cynical crimes: they target people who have already been scammed once, promising to recover their lost funds in exchange for upfront payments. They are the second layer of the same criminal network. This page helps you recognise and avoid them."}
          </p>

          {/* Red flags */}
          <div className="aif-card p-6 md:p-8 mt-10 !border-l-4 !border-l-[#FF6B7A]">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle size={22} className="text-[#FF6B7A]"/>
              <h2 className="text-2xl font-bold text-white">
                {isIt ? "Segnali di allarme — DIFFIDA se chi ti contatta…" : "Red flags — DO NOT TRUST if they…"}
              </h2>
            </div>
            <ul className="space-y-2.5 text-[14px]">
              {redFlags.map((f, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[var(--aif-text-dim)]">
                  <X size={16} className="text-[#FF6B7A] shrink-0 mt-0.5"/>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Safe checks */}
          <div className="aif-card p-6 md:p-8 mt-6 !border-l-4 !border-l-[#4ADE80]">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle2 size={22} className="text-[#4ADE80]"/>
              <h2 className="text-2xl font-bold text-white">
                {isIt ? "Cosa fare invece" : "What to do instead"}
              </h2>
            </div>
            <ul className="space-y-2.5 text-[14px]">
              {safeChecks.map((f, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[var(--aif-text-dim)]">
                  <CheckCircle2 size={16} className="text-[#4ADE80] shrink-0 mt-0.5"/>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="aif-card p-6 md:p-8 mt-6">
            <h2 className="text-2xl font-bold text-white">
              {isIt ? "Risorse ufficiali" : "Official resources"}
            </h2>
            <ul className="mt-4 space-y-2 text-[14px]">
              <li><a href="https://antifraudcentre-centreantifraude.ca" target="_blank" rel="noopener noreferrer" className="aif-link">Canadian Anti-Fraud Centre (CAFC) — Report fraud and scams</a></li>
              <li><a href="https://www.aretheyregistered.ca" target="_blank" rel="noopener noreferrer" className="aif-link">Canadian Securities Administrators — Check if a broker is registered</a></li>
              <li><a href="https://www.rcmp-grc.gc.ca" target="_blank" rel="noopener noreferrer" className="aif-link">RCMP — Royal Canadian Mounted Police</a></li>
              <li><a href="https://fintrac-canafe.canada.ca" target="_blank" rel="noopener noreferrer" className="aif-link">FINTRAC — Financial Transactions and Reports Analysis Centre of Canada</a></li>
              <li><a href="https://www.obsi.ca" target="_blank" rel="noopener noreferrer" className="aif-link">OBSI — Ombudsman for Banking Services and Investments</a></li>
              <li><a href="https://www.priv.gc.ca" target="_blank" rel="noopener noreferrer" className="aif-link">Office of the Privacy Commissioner of Canada</a></li>
            </ul>
          </div>

          {/* Our commitment */}
          <div className="aif-card aif-glow p-6 md:p-8 mt-6">
            <div className="text-[12px] uppercase tracking-[0.2em] text-[#5FE3C9]">
              {isIt ? "Il nostro impegno" : "Our commitment"}
            </div>
            <h2 className="text-2xl font-bold text-white mt-2">
              {isIt ? "Clari AI non userà MAI queste tattiche" : "Clari AI will NEVER use these tactics"}
            </h2>
            <p className="text-[var(--aif-text-dim)] mt-3 leading-relaxed">
              {isIt
                ? "Se qualcuno si presenta a tuo nome usando il marchio Clari AI e ti chiede pagamenti anticipati, password, OTP, seed phrase o l'installazione di software di accesso remoto, NON è Clari AI. Verifica sempre via "
                : "If someone contacts you using the Clari AI name and asks for upfront payments, passwords, OTP, seed phrases, or remote-access software, it is NOT Clari AI. Always verify via "}
              <a href="mailto:support@clari-ai.com" className="aif-link">support@clari-ai.com</a>{isIt ? "." : "."}
            </p>
          </div>
        </main>
        <Footer/>
      </div>
    </div>
  );
}

export default function BentoGrid() {
  return (
    <div className="bg-[#222222] py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-indigo-400">Deploy faster</h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
          Everything you need to scale your software
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          
          {/* --- AI Driven Deployments --- */}
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-gray-800 lg:rounded-l-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">AI-Driven Deployments</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                  Arivana automates your CI/CD workflow using intelligent pipelines that adapt to your app’s scale — faster rollouts, zero downtime.
                </p>
              </div>
              <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 outline outline-white/20">
                  <img
                    alt=""
                    src="https://i.ibb.co/yFx3dGRk/Chat-GPT-Image-Nov-9-2025-12-55-24-PM.png"
                    className="size-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 lg:rounded-l-4xl" />
          </div>

          {/* --- Performance --- */}
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-gray-800 max-lg:rounded-t-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">Performance</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                  Our systems analyze real-time metrics to auto-optimize server response, latency, and database queries — ensuring your app stays 10x faster.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/component-images/dark-bento-03-performance.png"
                  className="w-full max-lg:max-w-xs"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-t-4xl" />
          </div>

          {/* --- Security --- */}
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-gray-800" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">Zero-Trust Security Layer</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                  From token-based authentication to encrypted APIs and cloud firewalls — Arivana keeps your data and users protected end-to-end.
                </p>
              </div>
              <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/component-images/dark-bento-03-security.png"
                  className="h-[min(152px,40cqw)] object-cover"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15" />
          </div>

          {/* --- Connected Ecosystem (Code Style) --- */}
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-gray-800 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">Connected Ecosystem</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                  Plug into any service — payments, AI, or CRM — with Arivana’s unified APIs.
                </p>
              </div>
              <div className="relative min-h-120 w-full grow">
                <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900/60 outline outline-white/10">
                  <div className="flex bg-gray-900 outline outline-white/5">
                    <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                      <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                        ConnectedEcosystem.jsx
                      </div>
                    </div>
                  </div>
                  <pre className="px-6 pt-6 pb-14 text-gray-400 text-sm">
{`// ConnectedEcosystem.jsx
import { Integration, API, Cloud } from "arivana-core";

export default function ConnectedEcosystem() {
  const integrations = [
    "Stripe",
    "OpenAI",
    "Salesforce",
    "Firebase",
    "Slack",
  ];

  return (
    <section className="connected-ecosystem">
      <h2>Unified Integrations</h2>
      <p>
        Connect seamlessly with AI tools, payment gateways, and CRMs. 
        Arivana’s APIs make integration effortless, scalable, and secure.
      </p>

      <div className="integration-list">
        {integrations.map((tool) => (
          <Integration key={tool} name={tool} status="connected" />
        ))}
      </div>

      <API.Secure
        version="v2.3"
        encrypted
        rateLimit="1000 req/min"
        region="multi-cloud"
      />

      <Cloud autoScale backup="daily" />
    </section>
  );
}
`}
                  </pre>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
          </div>

        </div>
      </div>
    </div>
  )
}

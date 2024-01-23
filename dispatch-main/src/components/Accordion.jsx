import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

export default function Accordion() {
  return (
    <div className="w-full px-4">
      <div className="mx-auto w-full max-w-md rounded-2xl p-2">
        <Disclosure>
          {({ open }) => (
            <div className="border-b-[1px] border-[#27272a]">
              <Disclosure.Button className="flex w-full justify-between py-4 text-left text-base hover:underline">
                <span>Do I need my own Motor Carrier Authority?</span>
                <ChevronUpIcon
                  className={`${open ? 'rotate-180 transform' : ''} h-5 w-5`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="pb-4 text-sm text-left">
                Yes, unless you're leased to a carrier and require dispatching
                assistance for your current shipments.
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <div className="border-b-[1px] border-[#27272a]">
              <Disclosure.Button className="flex w-full justify-between py-4 text-left text-base hover:underline">
                <span>What are your company requirements?</span>
                <ChevronUpIcon
                  className={`${open ? 'rotate-180 transform' : ''} h-5 w-5`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="pb-4 text-sm text-left">
                While we prefer a minimum of 6 months in the business, it's not
                mandatory. The essential requirements are an active authority
                and insurance.
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <div className="border-b-[1px] border-[#27272a]">
              <Disclosure.Button className="flex w-full justify-between py-4 text-left text-base hover:underline">
                <span>What types of trailers can you book freight for?</span>
                <ChevronUpIcon
                  className={`${open ? 'rotate-180 transform' : ''} h-5 w-5`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="pb-4 text-sm text-left">
                Our expertise lies in dry van freight, but we also work with
                reefer and flatbed carriers.
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <div className="border-b-[1px] border-[#27272a]">
              <Disclosure.Button className="flex w-full justify-between py-4 text-left text-base hover:underline">
                <span>How long does the setup process take?</span>
                <ChevronUpIcon
                  className={`${open ? 'rotate-180 transform' : ''} h-5 w-5`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="pb-4 text-sm text-left">
                With all necessary documents provided, you can expect setup
                within 2-4 hours.
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <div className="border-b-[1px] border-[#27272a]">
              <Disclosure.Button className="flex w-full justify-between py-4 text-left text-base hover:underline">
                <span>Do you hold a broker license?</span>
                <ChevronUpIcon
                  className={`${open ? 'rotate-180 transform' : ''} h-5 w-5`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="pb-4 text-sm text-left">
                No, we don't possess a broker license. All bookings are made
                under your authority. This ensures that we cannot adjust your
                rates, a practice some broker-dispatch firms engage in.
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <div className="border-b-[1px] border-[#27272a]">
              <Disclosure.Button className="flex w-full justify-between py-4 text-left text-base hover:underline">
                <span>
                  I've found a dispatcher with lower fees. Can you match them?
                </span>
                <ChevronUpIcon
                  className={`${open ? 'rotate-180 transform' : ''} h-5 w-5`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="pb-4 text-sm text-left">
                No, we maintain a strict policy of "no more than 5 trucks per
                dispatcher" to guarantee our clients access to the highest
                available market rates. This approach ultimately makes our
                service more cost-effective than the competition.
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <div className="border-b-[1px] border-[#27272a]">
              <Disclosure.Button className="flex w-full justify-between py-4 text-left text-base hover:underline">
                <span>Where can I operate?</span>
                <ChevronUpIcon
                  className={`${open ? 'rotate-180 transform' : ''} h-5 w-5`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="pb-4 text-sm text-left">
                You have the flexibility to run in all 48 states or within a
                region of your choice. Most of our clients prefer operating in
                the Southeast, Midwest, and Northeast regions.
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <div className="border-b-[1px] border-[#27272a]">
              <Disclosure.Button className="flex w-full justify-between py-4 text-left text-base hover:underline">
                <span>Can I focus on local/regional routes?</span>
                <ChevronUpIcon
                  className={`${open ? 'rotate-180 transform' : ''} h-5 w-5`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="pb-4 text-sm text-left">
                Absolutely, if you're comfortable with fewer weekly miles
                (1000-1800).
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <div className="border-b-[1px] border-[#27272a]">
              <Disclosure.Button className="flex w-full justify-between py-4 text-left text-base hover:underline">
                <span>How long am I required to stay on the road?</span>
                <ChevronUpIcon
                  className={`${open ? 'rotate-180 transform' : ''} h-5 w-5`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="pb-4 text-sm text-left">
                The duration of your trips is entirely at your discretion.
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <div className="border-b-[1px] border-[#27272a]">
              <Disclosure.Button className="flex w-full justify-between py-4 text-left text-base hover:underline">
                <span>What types of freight can you secure for me?</span>
                <ChevronUpIcon
                  className={`${open ? 'rotate-180 transform' : ''} h-5 w-5`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="pb-4 text-sm text-left">
                We have experience booking a wide range of freight, from
                watermelons to airplane parts. If you have specific requests,
                please feel free to let us know.
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <div className="border-b-[1px] border-[#27272a]">
              <Disclosure.Button className="flex w-full justify-between py-4 text-left text-base hover:underline">
                <span>How will I receive payments?</span>
                <ChevronUpIcon
                  className={`${open ? 'rotate-180 transform' : ''} h-5 w-5`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="pb-4 text-sm text-left">
                As you operate under your own Authority, you'll bill and receive
                payments directly from individual brokers and shippers. For
                expedited payments, you can also opt for a factoring company,
                and we're happy to facilitate credit checks for you.
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <div className="border-b-[1px] border-[#27272a]">
              <Disclosure.Button className="flex w-full justify-between py-4 text-left text-base hover:underline">
                <span>How will I be invoiced?</span>
                <ChevronUpIcon
                  className={`${open ? 'rotate-180 transform' : ''} h-5 w-5`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="pb-4 text-sm text-left">
                We accept all major credit and debit cards. For our weekly plan,
                a recurring charge will be set up to streamline your payment
                process.
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      </div>
    </div>
  );
}

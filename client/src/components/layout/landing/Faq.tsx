import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/Accordion';

const Faq = () => {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-20 text-center">
          <div className="mb-8 flex items-center justify-center space-x-4">
            <div className="h-px w-16 bg-yellow-400"></div>
            <span className="text-sm font-medium tracking-[0.2em] text-gray-600 uppercase">
              Questions
            </span>
            <div className="h-px w-16 bg-yellow-400"></div>
          </div>

          <h2 className="text-4xl leading-tight font-light text-gray-900 md:text-5xl lg:text-6xl">
            Frequently Asked <span className="font-medium">Questions</span>
          </h2>
        </div>

        <div className="mx-auto max-w-4xl">
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem
              value="item-1"
              className="rounded-sm border border-gray-200/60 bg-white px-8 py-2"
            >
              <AccordionTrigger className="py-6 text-lg font-medium text-gray-900 hover:text-gray-600 hover:no-underline [&[data-state=open]>svg]:rotate-45">
                Do you offer financing options?
              </AccordionTrigger>
              <AccordionContent className="pb-6 leading-relaxed font-light text-gray-600">
                Yes, we have established partnerships with reputable mortgage brokers and lending
                institutions. Our team can connect you with experts who can assist in exploring a
                range of financing options tailored to your specific needs and financial situation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="rounded-sm border border-gray-200/60 bg-white px-8 py-2"
            >
              <AccordionTrigger className="py-6 text-lg font-medium text-gray-900 hover:text-gray-600 hover:no-underline [&[data-state=open]>svg]:rotate-45">
                What is the price range of your properties?
              </AccordionTrigger>
              <AccordionContent className="pb-6 leading-relaxed font-light text-gray-600">
                Our properties span a wide range of price points to accommodate diverse preferences
                and budgets. We have listings that cater to various needs, from affordable starter
                homes to luxury estates.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="rounded-sm border border-gray-200/60 bg-white px-8 py-2"
            >
              <AccordionTrigger className="py-6 text-lg font-medium text-gray-900 hover:text-gray-600 hover:no-underline [&[data-state=open]>svg]:rotate-45">
                Where are your properties located?
              </AccordionTrigger>
              <AccordionContent className="pb-6 leading-relaxed font-light text-gray-600">
                Our properties are located in diverse and sought-after neighborhoods, catering to a
                wide range of preferences and lifestyles. From vibrant urban centers to tranquil
                suburban communities, we offer listings across the world.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="rounded-sm border border-gray-200/60 bg-white px-8 py-2"
            >
              <AccordionTrigger className="py-6 text-lg font-medium text-gray-900 hover:text-gray-600 hover:no-underline [&[data-state=open]>svg]:rotate-45">
                How do I schedule a property viewing?
              </AccordionTrigger>
              <AccordionContent className="pb-6 leading-relaxed font-light text-gray-600">
                Our team will promptly arrange a viewing at a time that suits your schedule. We look
                forward to showing you the property and helping you take the next step towards
                finding your ideal home.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faq;

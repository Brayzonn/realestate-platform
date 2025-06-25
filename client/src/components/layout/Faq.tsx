import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const Faq = () => {
  return (
    <div className="py-[2rem]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">FAQ&apos;s</h2>
                <div className="w-16 h-1 bg-alternativePastelYellow rounded"></div>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="item-1" className="border-b border-gray-200 px-6 py-2">
                    <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-gray-500 hover:no-underline py-4 [&[data-state=open]>svg]:rotate-45">
                        Do you offer financing options?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 pb-4 leading-relaxed">
                        Yes, we have established partnerships with reputable mortgage brokers and lending institutions. Our team can connect you with experts who can assist in exploring a range of financing options tailored to your specific needs and financial situation.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-b border-gray-200 px-6 py-2">
                    <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-gray-500 hover:no-underline py-4 [&[data-state=open]>svg]:rotate-45">
                        What is the price range of your properties?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 pb-4 leading-relaxed">
                         Our properties span a wide range of price points to accommodate diverse preferences and budgets. We have listings that cater to various needs, from affordable starter homes to luxury estates.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-b border-gray-200 px-6 py-2">
                    <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-gray-500 hover:no-underline py-4 [&[data-state=open]>svg]:rotate-45">
                        Where are your properties located?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 pb-4 leading-relaxed">
                        Our properties are located in diverse and sought-after neighborhoods, catering to a wide range of preferences and lifestyles. From vibrant urban centers to tranquil suburban communities, we offer listings across the world.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-b border-gray-200 px-6 py-2">
                    <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-gray-500 hover:no-underline py-4 [&[data-state=open]>svg]:rotate-45">
                        How do I schedule a property viewing?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 pb-4 leading-relaxed">
                        Our team will promptly arrange a viewing at a time that suits your schedule. We look forward to showing you the property and helping you take the next step towards finding your ideal home.
                    </AccordionContent>
                </AccordionItem>

            </Accordion>
        </div>
    </div>
  )
}

export default Faq
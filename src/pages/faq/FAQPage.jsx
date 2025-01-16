import { FAQSection } from "../../components/FAQSection";
import { NavigationLayout } from "../../layouts/NavigationLayout";

export const FAQPage = () => {
  return (
    <>
      <NavigationLayout>
        <div className="w-full h-60 flex flex-col lg:flex-row justify-center items-center bg-white gap-3 mt-10">
          <div className="flex flex-col gap-5">
            <h1 className="text-xl sm:text-3xl mx-20 text-center text-gray-800">
              Find Answers To
              <br />
              <span className="text-dodgersBlue">F</span>
              requently
              <span className="text-dodgersBlue">&nbsp;A</span>
              sked
              <span className="text-dodgersBlue">&nbsp;Q</span>
              uestion
            </h1>
            <h2 className="text-gray-600 text-center">
              Got a question? Find our FAQs here. <br />
              If your question has not been answered here, use our
              <a href="/contact" className="text-blue-500">
                &nbsp;contact form
              </a>
              .
            </h2>
          </div>
          <img
            src="./images/faq.jpg"
            alt="FAQ"
            className="mr-20 w-84 h-32 sm:h-48 md:h-64 lg:h-64 rounded-lg"
          />
        </div>

        <section className="my-20 flex flex-col justify-center items-center gap-5 text-xl">
          <FAQSection
            name={"Procedures"}
            faqData={[
              {
                question: "What types of procedures do you offer for pets?",
                answer:
                  "We tailor our services to meet the specific needs of your pet, ensuring they receive the most appropriate and effective treatment for their health condition. Our veterinary team will work closely with you to discuss the options available and recommend the best course of action for your pet's well-being.",
              },
              {
                question:
                  "How do I know if my pet needs a specific procedure or surgery?",
                answer:
                  "We will assess your pet's symptoms through a comprehensive physical exam, medical history, and diagnostic tests like X-rays, ultrasounds, or blood work. If your pet is showing signs of discomfort, pain, or poor health that aren't responding to less invasive treatments, surgery or a specific procedure may be the best option. We will discuss the diagnosis and available options with you and help determine the most appropriate course of action for your pet.",
              },
              {
                question: "Is the procedure safe for my pet?",
                answer:
                  "We always prioritize your pet’s safety. Before recommending any procedure, we evaluate your pet’s overall health, age, and any pre-existing conditions. Modern veterinary practices and anesthesia are designed to be very safe, and your pet will be closely monitored throughout the procedure. We will discuss any potential risks and ensure we take every necessary precaution to minimize them.",
              },
              {
                question: "What happens during a typical procedure for my pet?",
                answer:
                  "For any procedure, we start by thoroughly examining your pet and ensuring they are well-prepared for the procedure. If anesthesia is required, we’ll ensure your pet is appropriately sedated. For surgeries, we maintain a sterile environment, make the necessary incisions, perform the procedure, and then close up the wound. Afterward, we monitor your pet carefully as they recover from anesthesia, and we will provide instructions for post-procedure care.",
              },
              {
                question: "Will my pet require anesthesia for the procedure?",
                answer:
                  "Many procedures, especially those involving surgery, will require anesthesia to keep your pet calm and pain-free during the process. We will evaluate your pet’s health to determine the safest anesthetic plan and closely monitor them throughout the procedure. We take every measure to ensure your pet's safety, and we will discuss the specifics of anesthesia with you before the procedure.",
              },
              {
                question: "How long does the procedure take?",
                answer:
                  "The length of the procedure depends on the complexity of the treatment. Simple procedures, such as a dental cleaning or small biopsy, may only take a short time (15-30 minutes). However, more involved surgeries could take an hour or more. We will give you an estimated time based on the specific procedure being performed on your pet.",
              },
              {
                question: "Can my pet eat or drink before the procedure?",
                answer:
                  "In most cases, we will recommend withholding food for 12 hours before the procedure if anesthesia is involved. This reduces the risk of vomiting and aspiration during the procedure. Small amounts of water may be allowed, but we’ll provide you with clear instructions specific to your pet’s procedure.",
              },
              {
                question: "Do you perform emergency procedures for animals?",
                answer:
                  "Yes, we are equipped to handle emergency procedures for animals, such as trauma surgery, emergency diagnostics, and critical care. If your pet is in urgent need of surgery or other immediate treatment, we encourage you to contact our clinic as soon as possible. We have protocols in place to manage emergencies, and we’ll ensure your pet gets the best care during an emergency situation.",
              },
              {
                question: "What are the risks involved in the procedure?",
                answer:
                  "Every medical procedure carries some risk. With surgery, there are risks related to anesthesia, infection, and healing. However, we take every precaution to minimize these risks by performing pre-operative evaluations, using the best anesthesia protocols, and maintaining strict sterility during surgery. We will fully explain the risks involved with your pet’s procedure and ensure you’re comfortable with the plan.",
              },
              {
                question:
                  "Will I be able to stay with my pet during the procedure?",
                answer:
                  "For most procedures, especially surgeries, owners are not allowed to stay with their pets due to the need for a sterile environment and safety protocols. However, we understand how stressful it can be for both you and your pet, and we will keep you updated and informed during the process. For non-surgical procedures or if your pet needs emotional support, we may allow you to stay depending on the nature of the procedure.",
              },
            ]}
          />
        </section>
        <section className="my-20 flex flex-col justify-center items-center gap-5 text-xl">
          <FAQSection
            name={"Costs"}
            faqData={[
              {
                question:
                  "Do you offer payment plans or financing for veterinary procedures?",
                answer:
                  "Yes, we understand that veterinary procedures can be a significant financial commitment. To help manage the costs, we offer payment plans and financing options through third-party providers. These plans allow you to pay for your pet’s treatment in installments. We can provide you with more details on these options and help you find the best solution for your situation.",
              },
              {
                question:
                  "Does the cost include pre-operative testing and consultations?",
                answer:
                  "The cost of the procedure itself typically includes the surgical or medical service, but pre-operative testing and consultations may be additional charges. Pre-operative testing, such as blood work or imaging, is often necessary to ensure your pet is healthy enough for surgery and to minimize any risks. We will provide a breakdown of all necessary tests and consultations, and we will discuss these costs upfront.",
              },
              {
                question:
                  "Are there any additional costs (such as medications, anesthesia, or follow-up care)?",
                answer:
                  "Yes, in addition to the procedure itself, there may be additional costs for medications, anesthesia, post-operative care, and follow-up visits. These additional charges depend on the specifics of the procedure and your pet’s recovery needs. We will provide you with a detailed estimate that includes all potential costs before the procedure is performed.",
              },
              {
                question: "Do you accept pet insurance?",
                answer:
                  "Yes, we accept pet insurance. If your pet is insured, we recommend contacting your insurance provider before the procedure to confirm coverage. While we do not directly process insurance claims, we can provide you with the necessary documentation and receipts to submit a claim for reimbursement.",
              },
              {
                question: "Are there any hidden fees I should be aware of?",
                answer:
                  "We strive to be transparent about all costs related to your pet's procedure. Any fees for pre-operative tests, medications, anesthesia, or post-operative care will be clearly communicated to you beforehand. There should be no hidden fees, but we encourage you to ask any questions about the breakdown of costs so you are fully informed.",
              },
              {
                question:
                  "Can I get an estimate of the total cost before the procedure?",
                answer:
                  "Yes, we will provide you with an estimate of the total cost before proceeding with any treatment. This estimate will include the procedure, any necessary pre-operative testing, anesthesia, medications, and follow-up care. We aim to ensure there are no surprises, and we encourage you to discuss any concerns about the costs with us ahead of time.",
              },
              {
                question:
                  "Is there a deposit required to book an appointment for a procedure?",
                answer:
                  "Depending on the type of procedure, we may require a deposit to book an appointment. This helps secure your spot and covers a portion of the procedure's estimated cost. We will inform you of any deposit requirements when scheduling the procedure and provide you with all necessary details.",
              },
              {
                question:
                  "Are there discounts or promotions available for specific procedures?",
                answer:
                  "Occasionally, we may offer discounts or promotions for specific procedures, such as vaccinations or routine spays and neuters. We will let you know if there are any current offers or programs available. Additionally, some clinics may offer seasonal promotions or special pricing for specific treatments, so feel free to inquire about any available discounts.",
              },
              {
                question:
                  "How do I pay for the procedure, and is payment due before or after the treatment?",
                answer:
                  "Payment is typically due at the time of the procedure. We accept a variety of payment methods, including credit cards, debit cards, and cash. If you have arranged a payment plan or financing, we will work with you to ensure the process is smooth. In some cases, for more extensive treatments or surgeries, a portion of the cost may be due upfront, with the remainder due after the procedure.",
              },
            ]}
          />
        </section>
        <section className="my-20 flex flex-col justify-center items-center gap-5 text-xl">
          <FAQSection
            name={"Post-Operative Care"}
            faqData={[
              {
                question:
                  "What should I expect immediately after my pet's procedure?",
                answer:
                  "Immediately after the procedure, your pet will be monitored as they recover from anesthesia. They may be drowsy or disoriented for a few hours. We will provide a safe, quiet environment for them to rest, and we’ll monitor vital signs to ensure they’re stable. Once your pet is awake and alert, we will give you instructions on caring for them at home. Your pet may need some extra comfort and attention as they come out of the anesthesia.",
              },
              {
                question:
                  "How will I know if my pet is in pain after the procedure?",
                answer:
                  "We closely monitor your pet for signs of pain, such as restlessness, panting, whining, difficulty moving, or avoiding touch. However, some pets are very good at hiding pain. We’ll provide pain management options, such as medications, to ensure your pet is as comfortable as possible. If you notice any signs of discomfort at home, it’s important to reach out to us, and we can adjust their pain management plan if needed.",
              },
              {
                question:
                  "Are there any special instructions for caring for my pet at home after surgery?",
                answer:
                  "Yes, we will provide specific aftercare instructions, which may include medication schedules, activity restrictions, wound care, and feeding guidelines. It's important to follow these instructions carefully to ensure proper healing and avoid complications. We may recommend limiting your pet's activity, keeping the surgical area clean, and monitoring for any changes in their behavior or health.",
              },
              {
                question:
                  "How long will my pet need to recover after the procedure?",
                answer:
                  "The recovery time will depend on the type of procedure your pet underwent. Minor procedures may take only a few days to recover, while more complex surgeries could require a few weeks. We will give you an estimated recovery time, and we will monitor your pet’s progress to ensure they are healing as expected. Follow-up check-ups may be needed to track their recovery.",
              },
              {
                question: "Can my pet eat or drink after the procedure?",
                answer:
                  "After anesthesia, your pet may feel a little nauseous, so we usually recommend waiting a few hours before offering food or water. Once they’re fully awake and stable, we will provide guidelines for gradually reintroducing food and water. It’s important to monitor your pet’s appetite and drinking habits during recovery, as some pets may have a reduced appetite for the first few days after surgery.",
              },
              {
                question:
                  "What signs should I watch for to make sure my pet is healing properly?",
                answer:
                  "Keep an eye on your pet’s incision site for signs of infection, such as redness, swelling, or discharge. Additionally, monitor their behavior—if they’re eating, drinking, and engaging in normal activities, that’s a good sign of recovery. You should also be alert for excessive limping, lethargy, or changes in appetite. If anything seems off, please contact us for further evaluation.",
              },
              {
                question:
                  "When can I take my pet for walks or exercise after surgery?",
                answer:
                  "After surgery, your pet will need time to rest and recover. Typically, we recommend restricting exercise for at least 7–14 days, depending on the type of procedure. During this time, avoid walks, running, or jumping. We’ll provide specific guidelines based on your pet’s procedure. Once the healing process is well underway, we can gradually reintroduce exercise to avoid strain on the healing site.",
              },
              {
                question:
                  "How often should I bring my pet back for follow-up check-ups?",
                answer:
                  "We generally recommend follow-up check-ups 7–10 days after surgery to monitor healing and remove any sutures if necessary. For more complex surgeries, additional follow-ups may be needed. We will provide a tailored follow-up schedule based on the specific procedure and your pet’s recovery progress. During these check-ups, we will assess the healing process and ensure there are no complications.",
              },
              {
                question:
                  "What should I do if I notice any unusual symptoms or complications after the procedure?",
                answer:
                  "If you notice any unusual symptoms such as excessive bleeding, signs of infection (pus or swelling around the incision), loss of appetite, vomiting, or changes in behavior, it’s important to contact us immediately. Timely intervention can prevent complications and ensure your pet heals properly. We will guide you through the next steps and provide any necessary treatments.",
              },
              {
                question:
                  "Is there a chance that my pet will need additional treatments or follow-up procedures?",
                answer:
                  "In some cases, your pet may need additional treatments or follow-up procedures, depending on the outcome of the initial procedure and their recovery process. We will keep you informed of any potential needs for further care and discuss all options. If complications arise or healing doesn’t progress as expected, we may need to explore additional treatments to ensure the best outcome for your pet.",
              },
            ]}
          />
        </section>
      </NavigationLayout>
    </>
  );
};

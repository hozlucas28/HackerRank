import fn from "./solution.ts"
import { expect, test, describe } from "bun:test"

describe("Challenge 32: Detect the email address", () => {
	test("Test 01", () => {
		const received = fn([
			`Finally this phone is testimony to our quest and ever open ears for hearing from our customers since 1921. We look forward to hearing from you today.`,
			`All India National Toll Free Number: 180 0425 0426`,
			`Working Hours: 10:00 am to 6:00 pm (Monday ~ Friday),`,
			`10:00 am to 2:00 pm (Saturday). To report ATM Card Lost, Kindly contact: +91 (44) 2622 3106 / 2622 3109.`,
			`TMB Customer Care: +91 9842 461 461`,
			`For all your queries, on any of our services in any branch in India, you can now SMS ï¿½ï¿½ï¿½helpï¿½ï¿½ï¿½ or call +91 9842 461 461. TMBï¿½ï¿½ï¿½s Customer Care team is at your service (10:00am to 5:30pm) & will address your concerns immediately. You can also email us at: customerservice@tnmbonline.com`,
			`NRI Help Desk:`,
			`Non Resident Indians / Persons of Indian Origin can write to us for priority response to this separate email id for any queries, questions and banking solutions. Email: nricell@tnmbonline.com`,
			`TMB Head Office Static Map (Click for Live Map)`,
			`Head Office:`,
			`Static Location Map (Pointer A) and the contact address of our Registered and Administrative Office:`,
			`Tamilnad Mercantile Bank Limited`,
			`(A Scheduled Commercial Bank & Authorized Dealers in Foreign Exchange)`,
			`57, V.E. Road, Tuticorin, Tamilnadu, India. Zip: 628 002.`,
			`Phone: +91 (461) 232 1382 / 232 1929 / 232 1932.`,
			`Email: bd@tnmbonline.com`,
			`Email: ttn_tmbankhi@sancharnet.in`,
			`Global Network of Branch / ATMï¿½ï¿½ï¿½s / Points of Presence:`,
			`Click the Branch Network to find out more about the current branches / atms / pop network anwhere in India.`,
			`TMB IBD Office Static Map (Click for Live Map)`,
			`International Banking Division (IBD / Forex):`,
			`Static Location Map of Chennai (Gopalpuram Area - Pointer A) and the complete contact address of our international banking division which takes care of all the overseas and forex activities:`,
			`Tamilnad Mercantile Bank Limited`,
			`269/2-4, Avvai Shanmugham Road, Royapettah,`,
			`Chennai, Tamilnadu, India. Zip: 600 014.`,
			`Phone: +91 (44) 2813 1028 / 2813 1029.`,
			`Email: ibd@tnmbonline.com`,
			`Other Non Banking Administrative Offices:`,
			`Click the Non Banking Administrative Offices Network to find out more about the other offices / departments of TMB.`,
			`- See more at: http://www.tmb.in/contact_us/our_contact_info_email_and_postal_mail_address.html#sthash.u7R69pmj.dpuf`,
			`whymandesign 3 Nov`,
			`Can we help eg @WEBiversity @davos: @Delhi listens to @citizens #India @learn #transparency #gov? http://wef.ch/m1ZAW  #WEF @NextBillion`,
			`Followed by edutopia`,
			`Expand`,
			`Trustlibrary.org ï¿½ï¿½ï¿½@TRUSTlibrary 3 Nov`,
			`Can we help eg @WEBiversity @davos: @Delhi listens to @citizens #India @learn #transparency #gov? http://wef.ch/m1ZAW  #WEF @NextBillion`
		])

		const expected =
			"bd@tnmbonline.com;customerservice@tnmbonline.com;ibd@tnmbonline.com;nricell@tnmbonline.com;ttn_tmbankhi@sancharnet.in"

		expect(received).toBe(expected)
	})

	test("Test 02", () => {
		const received = fn([
			`Adventure`,
			`Send a letter to the editor about the content of the Adventure website.`,
			`mpotts@ngs.org`,
			`Advertising`,
			`Why not sponsor an online feature?`,
			`jbmccorm@ngs.org`,
			`The Complete National Geographic`,
			`Use this help form to contact us with comments or support questions regarding The Complete National Geographic on DVD or hard drive.`,
			`CNG Help Form`,
			`Customer Service: Magazine Subscriptions`,
			`Send questions regarding your subscriptions. Check on delivery, expiration dates, or other concerns. Inquiries about National Geographic, National Geographic Kids, and Traveler can be sent to this email address. Customer service is also available online at ngsline@customersvc.com.`,
			`Digital Magazine Subscriptions`,
			`For questions about digital subscriptions to National Geographic magazine (iPad, Nook, Kindle, or Zinio) email us at ngsdigital@customersvc.com or call 1-800-895-2068. You can also read the digital FAQs online.`,
			`Donating to National Geographic`,
			`Please contact us at givinginfo@ngs.org or call +1 202 862 8638 with any questions regarding your donation, or how to make a donation in support of the Society's work in exploration, research, and education. Thank you for your support!`,
			`Frequently Asked Questions`,
			`Find answers to your questions here.`,
			`http://www.nationalgeographic.com/faq/`,
			`Games`,
			`For questions about downloadable games and Plan It Green Live, please write to:`,
			`askngs@nationalgeographic.com and put "Attn: Games" in the subject line.`,
			`Genographic Project`,
			`Send us your questions regarding the Genographic Project.`,
			`genographic@ngs.org`,
			`Genographic Project en espaï¿½ï¿½ol`,
			`Envienos en espaï¿½ï¿½ol sus preguntas sobre el Proyecto Genographic.`,
			`genographicespanol@ngs.org`,
			`Mobile Applications and More`,
			`Email us with comments or support questions regarding our content for iPhone, iPad, Android, Windows Mobile 7, and more: apps@ngs.org.`,
			`For magazine app and digital subscription queries email us at ngsdigital@customersvc.com or call 1-800-895-2068.`,
			`National Geographic Channel`,
			`Send comments or questions regarding our television programming.`,
			`feedback@natgeotv.com`,
			`National Geographic Expeditions`,
			`For more information or to reserve your space, call toll-free 1-888-966-8687, or reserve online at nationalgeographicexpeditions.com.`,
			`For email inquiries use this form.`,
			`National Geographic Magazine`,
			`Send a letter to the Editor about the content of National Geographic magazine. Letters will be considered for the monthly Forum column.`,
			`ngsforum@nationalgeographic.com`,
			`National Geographic Maps`,
			`Contact us with questions about our maps.`,
			`maps@ngs.org`,
			`Photography: Stock Photography`,
			`National Geographic Stock's photography collection offers the best in rights managed and royalty free wildlife, travel, landscape and lifestyle photographs available for professional editorial and commercial licensing.`,
			`stock@ngs.org`,
			`Photography: Commercial Assignments`,
			`National Geographic Assignment represents international commercial photographers specializing in lifestyle, adventure, travel, and landscape photography. Online portfolios are available.`,
			`ngassignment@ngs.org`,
			`Photography: Prints`,
			`You can order beautiful National Geographic prints for your home or as a great gift. Browse through our collection.`,
			`News`,
			`Send comments, questions or concerns regarding the National Geographic News site.`,
			`newsdesk@nationalgeographic.com`,
			`Public Relations`,
			`Send press inquiries here.`,
			`pressroom@ngs.org`,
			`Speakers Bureau`,
			`Send inquiries about having a National Geographic photographer, adventurer, explorer, or scientist speak at your next event.`,
			`speakers@ngs.org`,
			`TOPO! Digital Maps`,
			`Send us your product and technical support quesions.`,
			`topo@ngs.org`,
			`Traveler Magazine`,
			`Send a letter about Traveler magazine.`,
			`Traveler@ngs.org`,
			`Your Shot & Your Shot Puzzles`,
			`Help Form`,
			`Frequently Asked Questions`,
			`Miscellaneous`,
			`Not sure where to send your question? Weï¿½ï¿½ï¿½ll pass it to the proper department. Please keep in mind that the high volume of mail does not allow us to send everyone a personal answer.`,
			`askngs@nationalgeographic.com`
		])

		const expected =
			"Traveler@ngs.org;apps@ngs.org;askngs@nationalgeographic.com;feedback@natgeotv.com;genographic@ngs.org;genographicespanol@ngs.org;givinginfo@ngs.org;jbmccorm@ngs.org;maps@ngs.org;mpotts@ngs.org;newsdesk@nationalgeographic.com;ngassignment@ngs.org;ngsdigital@customersvc.com;ngsforum@nationalgeographic.com;ngsline@customersvc.com;pressroom@ngs.org;speakers@ngs.org;stock@ngs.org;topo@ngs.org"

		expect(received).toBe(expected)
	})
})

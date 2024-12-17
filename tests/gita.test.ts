import { GitaLibrary, GitaShloka, GitaVerse, ChapterNotFoundError, ShlokaNotFoundError } from "gitanpm"
import path from 'path';
import fs from 'fs';

jest.mock('fs');

const mockGitaData = JSON.stringify([
    {
        "index": 0,
        "Chapter": "1",
        "Verse": "1",
        "Devanagari": "धृतराष्ट्र उवाचधर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सव: ।मामका: पाण्डवाश्चैव किमकुर्वत सञ्जय ॥ १ ॥",
        "verseText": "dhṛtarāṣṭra uvācadharma-kṣetre kuru-kṣetresamavetā yuyutsavaḥmāmakāḥ pāṇḍavāś caivakim akurvata sañjaya",
        "Synonyms": "dhṛtarāṣṭraḥ uvāca — King Dhṛtarāṣṭra said; dharma-kṣetre — in the place of pilgrimage; kuru-kṣetre — in the place named Kurukṣetra; samavetāḥ — assembled; yuyutsavaḥ — desiring to fight; māmakāḥ — my party (sons); pāṇḍavāḥ — the sons of Pāṇḍu; ca — and; eva — certainly; kim — what; akurvata — did they do; sañjaya — O Sañjaya.",
        "Translation": "Dhṛtarāṣṭra said: O Sañjaya, after my sons and the sons of Pāṇḍu assembled in the place of pilgrimage at Kurukṣetra, desiring to fight, what did they do?",
        "Meaning": [
            "Bhagavad-gītā is the widely read theistic science summarized in the Gītā-māhātmya (Glorification of the Gītā). There it says that one should read Bhagavad-gītā very scrutinizingly with the help of a person who is a devotee of Śrī Kṛṣṇa and try to understand it without personally motivated interpretations. The example of clear understanding is there in the Bhagavad-gītā itself, in the way the teaching is understood by Arjuna, who heard the Gītā directly from the Lord. If someone is fortunate enough to understand the Bhagavad-gītā in that line of disciplic succession, without motivated interpretation, then he surpasses all studies of Vedic wisdom, and all scriptures of the world. One will find in the Bhagavad-gītā all that is contained in other scriptures, but the reader will also find things which are not to be found elsewhere. That is the specific standard of the Gītā. It is the perfect theistic science because it is directly spoken by the Supreme Personality of Godhead, Lord Śrī Kṛṣṇa. The topics discussed by Dhṛtarāṣṭra and Sañjaya, as described in the Mahābhārata, form the basic principle for this great philosophy. It is understood that this philosophy evolved on the Battlefield of Kurukṣetra, which is a sacred place of pilgrimage from the immemorial time of the Vedic age. It was spoken by the Lord when He was present personally on this planet for the guidance of mankind. The word dharma-kṣetra (a place where religious rituals are performed) is significant because, on the Battlefield of Kurukṣetra, the Supreme Personality of Godhead was present on the side of Arjuna. Dhṛtarāṣṭra, the father of the Kurus, was highly doubtful about the possibility of his sons’ ultimate victory. In his doubt, he inquired from his secretary Sañjaya, “What did they do?” He was confident that both his sons and the sons of his younger brother Pāṇḍu were assembled in that Field of Kurukṣetra for a determined engagement of the war. Still, his inquiry is significant. He did not want a compromise between the cousins and brothers, and he wanted to be sure of the fate of his sons on the battlefield. Because the battle was arranged to be fought at Kurukṣetra, which is mentioned elsewhere in the Vedas as a place of worship – even for the denizens of heaven – Dhṛtarāṣṭra became very fearful about the influence of the holy place on the outcome of the battle. He knew very well that this would influence Arjuna and the sons of Pāṇḍu favorably, because by nature they were all virtuous. Sañjaya was a student of Vyāsa, and therefore, by the mercy of Vyāsa, Sañjaya was able to envision the Battlefield of Kurukṣetra even while he was in the room of Dhṛtarāṣṭra. And so, Dhṛtarāṣṭra asked him about the situation on the battlefield. Both the Pāṇḍavas and the sons of Dhṛtarāṣṭra belong to the same family, but Dhṛtarāṣṭra’s mind is disclosed herein. He deliberately claimed only his sons as Kurus, and he separated the sons of Pāṇḍu from the family heritage. One can thus understand the specific position of Dhṛtarāṣṭra in his relationship with his nephews, the sons of Pāṇḍu. As in the paddy field the unnecessary plants are taken out, so it is expected from the very beginning of these topics that in the religious field of Kurukṣetra, where the father of religion, Śrī Kṛṣṇa, was present, the unwanted plants like Dhṛtarāṣṭra’s son Duryodhana and others would be wiped out and the thoroughly religious persons, headed by Yudhiṣṭhira, would be established by the Lord. This is the significance of the words dharma-kṣetre and kuru-kṣetre, apart from their historical and Vedic importance.",
            "The two armies had gathered on the battlefield of Kurukshetra, well prepared to fight a war that was inevitable. Still, in this verse, King Dhritarashtra asked Sanjay, what his sons and his brother Pandu’s sons were doing on the battlefield? It was apparent that they would fight, then why did he ask such a question?The blind King Dhritarashtra’s fondness for his own sons had clouded his spiritual wisdom and deviated him from the path of virtue. He had usurped the kingdom of Hastinapur from the rightful heirs; the Pandavas, sons of his brother Pandu. Feeling guilty of the injustice he had done towards his nephews, his conscience worried him about the outcome of this battle.The words dharma kṣhetre, the land of dharma (virtuous conduct) used by Dhritarashtra depict the dilemma he was experiencing. Kurukshetra is described as kurukṣhetraṁ deva yajanam in the Shatapath Brahman, the Vedic textbook detailing rituals. It means “Kurukshetra is the sacrificial arena of the celestial gods.” Hence, it was regarded as the sacred land that nourished dharma. Dhritarashtra feared that the holy land might influence the minds of his sons. If it aroused the faculty of discrimination, they might turn away from killing their cousins and negotiate a truce. A peaceful settlement meant that the Pandavas would continue being a hindrance for them. He felt great displeasure at these possibilities, instead preferred that this war transpires. He was uncertain of the consequences of the war, yet desired to determine the fate of his sons. Therefore, he asked Sanjay about the activities of the two armies on the battleground.",
            "In this very first verse of Srimad Bhagavad-Gita beginning with dharma- ksetra-kuru-ksetra, avatar Krsna Dwaipayana Vyasadeva has used this narrative form: assembled in the place of righteousness Kuruksetra etc.; to properly introduce the location, the action and the theme. Thereafter when King Dhritarastra in Hastinapura asks his minister, Sanjaya who had received clairvoyance by the grace of Vyasadeva as to what happened on the battlefield, Sanjaya related all the events exactly as they happened by having the clairvoyant ability to witness them directly within his mind as if he was there present. Srila Vyasadeva to properly introduce their dialogue begins with the narrative form with: having seen the army of the sons of Pandu etc. After this until the end of the chapter the subtle intricacies of duty are delineated. As has been stated in the ancient Vedic scriptures concerning the greatness of Srimad Bhagavad-Gita and that is the words that emanate from the transcendental mouth of the Supreme Lord Krishna when well assimilated precludes the necessity of various other scriptures.",
            "Madhvacarya has no commentary so we present Baladeva Vidyabhusana's. To properly illustrate the consistency in the conversation between Lord Krishna and Arjuna on the battlefield, Krishna Dvaipayana Vyasa has quoted the first 27 verses in chapter one beginning dharma-ksetra kuru- ksetra refering to Kuruksetra as the land of righteousness. Now when King Dhritarastra learned that Lord Krishna had accepted the position of chariot driver for Arjuna, he immediately was suspicious and became doubtful of his son, Duryodhana's chances for victory. At that time he asked his minister Sanjaya a redundant question as what did his sons and the son of his brother do in the first verse of chapter one. It should be understood in the correct context that the revelatory instructions given by Lord Krishna to Arjuna in the 700 verses of Srimad Bhagavad-Gita that is revealed within Krishna Dwaipayana Vyasa's monumental, historical epic, Mahabharata; as to what was being told by Sanjaya to Dhritarastra is actually a conversation described to Arjunas great, grandson, Emperor Janamejaya by Vaisampayana Muni and it is he who is expressing the words dhritarastra uvaca meaning Dhritarastra said. Srimad Bhagavad-Gita begins with Dhritarastra asking Sanjaya: What did my sons and the sons of Pandu, assembled at the righteous land of Kuruksetra desirious of battle do? Now the question which arises, is what was the necessity of Dhritarastra asking Sanjaya what did they do; when he himself in the same verse says: they are assembled desirous of battle. The reason he is asking is because Kuruksetra is the land of righteousness. Dhritarastra was thinking: Kuruksetra is famous as the land of sacrifice for the demigods and also the abode of brahma-jnana, knowledge of the Ultimate Truth for all living entities. He was worried that under the potent influence of Kuruksetra's righteous land, his sons would have decided to return half of the kingdom back unto the sons of Pandu now being free from all jealously? Or is it that the sons of Pandu fearing that the destruction of a dynasty is an unrighteous act in a holy place like Kuruksetra and have decided that it's best to retire to the forest and live as renunciates for the rest of their lives? By addressing Sanjaya, Dhritarastra means that by the mercy of Krishna Dwaipayana Vyasa, Sanjaya has become free from attachment and aversion and thus he will certainly speak the truth. By using the word mamakah and pandavah in referring to his sons and the sons of Pandu indicates disparity and shows that Dhritarastra did not accept the sons of his deceased brother Pandu as he did his own sons and this reveals his enmity towards them. Ksetra also means field of cultivation. Just as in a rice field there are unwanted grasses looking exactly like the rice paddy which must be uprooted. Similarly the use of the word dharma-ksetra is indicative that the unrighteous sons of Dhritarastra will also be uprooted.",
            "The Supreme Lord Krishna in order to mitigate Arjuna's lamentation tells him that he grieves for that which is not worthy of sorrow in answer to the cause of Arjuna woes as has been described in the first chapter which began by the blind Dhrtarastra inquiring about his hoped for sons victory; yet internally in doubt due to Arjunas unsurpassable valour revealed in his aquisition of divine weapons by satisfying Shiva, also this was proved when Arjuna defeated the Gandharvas and released Duryodhana even though the latter had come to cause he and his brothers mischief, also by Arjunas removing of the Kauravas crowns and ornaments when he defeated them recapturing the cowherd of the king at the city of Virata. All these events flashed through Dhritarastra's mind and with a heavy heart he asked Sanjaya who had been bequeathed with clairvoyance byVedavyasa giving him the capacity to envision everything that was happenning on the battlefield of Kuruksetra between the army of his sons the Kauravas and the army of the Pandavas. The Mahabharata records these events from a conversation between the holy sage Vaisampayana and Arjunas great-grandson Janamejaya and begins the Bhagavad-Gita with Dhritarastra spoke. In this very first verse the question is placed within the sentence thus: In the holy land of Kuruksetra what did my sons and the sons of Pandu desiring battle do? Kuruksetra is the place of the origin of dharma or righteousness. The Vedic scriptures declare that Kuruksetra is a place for performing sacrifice. Its signifigance is well known and recorded. All through the ages Kuruksetra has been a place for performing sacrifice, sacred and holy, resided at by the Brahma-rishis. Those who depart this world at Kuruksetra should not be grieved for under any circumstances. The suggested question that Dhritarastra is inwardly posing is whether or not his sons observing the powerful warriors in the enemy ranks such as the mighty Bhima and the intrepid Arjuna who is a perfect master in the use of celestial weapons, were still determined to fight or reconsidering did they give up all thoughts of warfare and instead call a truce and make a peace settlement. The phrase dharma-ksetra kuru-ksetra used by Dhritarastra signifies two things. The first is that he is inwardly thinking that his sons who are not righteous might give back the kingdom to the Pandavas which they appropriated by fraudulent means, due to being influenced by the righteousness and holy acts of sanctity performed in sacred sacrifice for the satisfaction of Bhrigu Muni and as well as the potent act of atonement performed by avatar Parasurama which He offered on five altars as expiation for his fathers death. The second is that Dhritarastra was contemplating that Kuruksetra being the the place where dharma originated is inherently powerfully potent in virtue and righteousness. If the Pandavas who are virtuous by nature, increase in righteousness due to contact with the holiness of Kuruksetra and thereby lose all desire in regaining the kingdom after duly weighing the sinful consequences of slaying their kinsman and relatives then I would be very pleased with them."
        ]
    },
    {
        "index": 1,
        "Chapter": "1",
        "Verse": "2",
        "Devanagari": "सञ्जय उवाचदृष्ट्वा तु पाण्डवानीकं व्यूढं दुर्योधनस्तदा ।आचार्यमुपसङ्गम्य राजा वचनमब्रवीत् ॥ २ ॥",
        "verseText": "sañjaya uvācadṛṣṭvā tu pāṇḍavānīkaṁvyūḍhaṁ duryodhanas tadāācāryam upasaṅgamyarājā vacanam abravīt",
        "Synonyms": "sañjayaḥ uvāca — Sañjaya said; dṛṣṭvā — after seeing; tu — but; pāṇḍava-anīkam — the soldiers of the Pāṇḍavas; vyūḍham — arranged in a military phalanx; duryodhanaḥ — King Duryodhana; tadā — at that time; ācāryam — the teacher; upasaṅgamya — approaching; rājā — the king; vacanam — words; abravīt — spoke.",
        "Translation": "Sañjaya said: O King, after looking over the army arranged in military formation by the sons of Pāṇḍu, King Duryodhana went to his teacher and spoke the following words.",
        "Meaning": [
            "Dhṛtarāṣṭra was blind from birth. Unfortunately, he was also bereft of spiritual vision. He knew very well that his sons were equally blind in the matter of religion, and he was sure that they could never reach an understanding with the Pāṇḍavas, who were all pious since birth. Still he was doubtful about the influence of the place of pilgrimage, and Sañjaya could understand his motive in asking about the situation on the battlefield. Sañjaya wanted, therefore, to encourage the despondent king and thus assured him that his sons were not going to make any sort of compromise under the influence of the holy place. Sañjaya therefore informed the king that his son, Duryodhana, after seeing the military force of the Pāṇḍavas, at once went to the commander in chief, Droṇācārya, to inform him of the real position. Although Duryodhana is mentioned as the king, he still had to go to the commander on account of the seriousness of the situation. He was therefore quite fit to be a politician. But Duryodhana’s diplomatic veneer could not disguise the fear he felt when he saw the military arrangement of the Pāṇḍavas.",
            "Sanjay understood Dhritarashtra’s concern, who wanted an assurance that the battle would eventuate. Sanjay tried to allay his worry by informing that the Pandava army was standing in a military formation, ready for battle. Then he moved on to tell him what his son Duryodhana was doing on the battlefield.As King Dhritarashtra was blind, his eldest son Duryodhana virtually ruled the kingdom of Hastinapur. In the Mahabharata, he is described as very rude, egoistic, evil and cruel by nature. Since his childhood, he had a strong dislike for the Pandavas and left no opportunity to demean them. He was aware that to rule over the entire kingdom of Hastinapur unchallenged he needed to eliminate them. However, standing on the battlefield, when he saw the large Pandava army, he was baffled. He had underestimated the Pandavas, the extent of military might they had gathered was way beyond his expectation.Duryodhana approached his guru Dronacharya with the pretense of offering respect, but his actual purpose was to palliate his own nervousness. His move towards his guru also reveals that the mammoth military formation of the Pandava army unnerved him and he was now fearful of the outcome of this war.The next nine verses are spoken by Duryodhan.",
            "Having seen the armies of the Pandavas arrayed in military formation ready for battle, King Duryodhana approaches his preceptor Drona and spoke the following words.",
            "Madhvacarya has no commentary so we present Baladeva Vidyabhusana's. Dhritarastra although blind at birth was born with an inner eye of knowledge; but due to being overly affectionate and attached to his sons he lost the knowledge of righteousness and thus he was worrying that his sons might return half of the kingdom to the Pandavas who were the rightful heirs. Sanjaya who was righteous by nature could understand the actual internal mood of Dhritarastra; but to appease his anxiety that his sons would never give back half of the kingdom he said this verse beginning drstva tu pandavanikam vyudham...the soldiers of the Pandavas are in military formation. The initiative taken by Duryodhana in approaching his preceptor in archery, the master bowman Drona shows that internally he was feeling fearful at the sight of the Pandavas might. So with the pretence of going to offer respect, he approached Drona to conceal this fear. The word raja meaning king indicates that Duryodhana was very expert in the diplomacy of politics and the use of the word vacanam implies that he would speak terse sentences filled with heavy import concerning the subject of war.",
            "In this way, Vaisampayana reiterates the answer of Sanjaya who could truly understand the blind Dtritarastra's hidden desire his heart being locked in affection for his sons welfare irregardless of righteousness. Sanjaya then replies that King Duryodhana upon seeing the formidable army of the Pandava arranged in military phalanxes approached Drona his instructor in archery and weaponry and uttered these words. By this verse the alarm within the mind of Duryodhana caused by seeing the might of the Pandava army is subtlety suggested."
        ]
    },
]);

describe('GitaLibrary', () => {
    beforeAll(() => {
        // Mock fs.readFileSync to return the mock data
        (fs.readFileSync as jest.Mock).mockReturnValue(mockGitaData);
    });

    test('should initialize and load data correctly', () => {
        const library = new GitaLibrary();
        expect(library).toBeDefined();
        expect((library as any).gitaData.length).toBe(611);
    });

    test('should return description metadata', () => {
        const library = new GitaLibrary();
        const description = library.getDescription();

        expect(description).toEqual({
            title: 'Bhagavad Gita',
            description: expect.any(String),
            totalChapters: 18,
            totalVerses: 700,
        });
    });

    test('should fetch a specific chapter', () => {
        const library = new GitaLibrary();
        const chapter = library.getChapter(1);

        expect(chapter).toHaveLength(39);
        expect(chapter[0]).toBeInstanceOf(GitaShloka);
        expect(chapter[0].getVerseText()).toBe('dhṛtarāṣṭra uvācadharma-kṣetre kuru-kṣetresamavetā yuyutsavaḥmāmakāḥ pāṇḍavāś caivakim akurvata sañjaya');
    });

    test('should throw ChapterNotFoundError if chapter does not exist', () => {
        const library = new GitaLibrary();

        expect(() => library.getChapter(99)).toThrow(ChapterNotFoundError);
        expect(() => library.getChapter(99)).toThrow('Chapter 99 not found.');
    });

    test('should fetch a specific shloka by chapter and verse', () => {
        const library = new GitaLibrary();
        const shloka = library.getShloka(1, 1);

        expect(shloka).toBeInstanceOf(GitaShloka);
        expect(shloka.getDevanagari()).toBe('धृतराष्ट्र उवाचधर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सव: ।मामका: पाण्डवाश्चैव किमकुर्वत सञ्जय ॥ १ ॥');
        expect(shloka.getTranslation()).toBe('Dhṛtarāṣṭra said: O Sañjaya, after my sons and the sons of Pāṇḍu assembled in the place of pilgrimage at Kurukṣetra, desiring to fight, what did they do?');
    });

    test('should throw ShlokaNotFoundError if shloka does not exist', () => {
        const library = new GitaLibrary();

        expect(() => library.getShloka(1, 99)).toThrow(ShlokaNotFoundError);
        expect(() => library.getShloka(1, 99)).toThrow(
            'Shloka not found in Chapter 1, Verse 99.'
        );
    });

    test('should fetch all verses grouped by chapter', () => {
        const library = new GitaLibrary();
        const verses = library.getAllVerses();

        expect(verses).toHaveLength(18);
        expect(verses[0]).toBeInstanceOf(GitaVerse);
        expect(verses[0].getTotalShlokas()).toBe(39);
    });
});

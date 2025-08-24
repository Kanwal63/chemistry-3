document.addEventListener('DOMContentLoaded', () => {

    const questions_data = [
        // Chapter 3: Periodic Table and Periodicity of Properties - 100 Questions
        {"question": "Who arranged elements in groups of three called 'triads'?", "urdu_question": "کس نے عناصر کو تین کے گروہوں میں ترتیب دیا جنہیں 'ٹرائی ایڈز' کہا جاتا ہے؟", "options": ["Newlands", "Mendeleev", "Dobereiner", "Moseley"], "answer": "Dobereiner"},
        {"question": "The Modern Periodic Law is based on the:", "urdu_question": "جدید دوری قانون کس پر مبنی ہے؟", "options": ["Atomic Mass", "Atomic Number", "Number of Neutrons", "Mass Number"], "answer": "Atomic Number"},
        {"question": "The vertical columns in the periodic table are called:", "urdu_question": "دوری جدول میں عمودی کالموں کو کیا کہتے ہیں؟", "options": ["Periods", "Groups", "Series", "Blocks"], "answer": "Groups"},
        {"question": "The horizontal rows in the periodic table are called:", "urdu_question": "دوری جدول میں افقی قطاروں کو کیا کہتے ہیں؟", "options": ["Periods", "Groups", "Families", "Blocks"], "answer": "Periods"},
        {"question": "How many groups are there in the modern periodic table?", "urdu_question": "جدید دوری جدول میں کتنے گروپس ہیں؟", "options": ["7", "8", "10", "18"], "answer": "18"},
        {"question": "How many periods are there in the modern periodic table?", "urdu_question": "جدید دوری جدول میں کتنی پیریڈز ہیں؟", "options": ["7", "8", "16", "18"], "answer": "7"},
        {"question": "Elements in Group 1 are called:", "urdu_question": "گروپ 1 کے عناصر کیا کہلاتے ہیں؟", "options": ["Alkaline Earth Metals", "Halogens", "Noble Gases", "Alkali Metals"], "answer": "Alkali Metals"},
        {"question": "Elements in Group 17 are known as:", "urdu_question": "گروپ 17 کے عناصر کو کیا کہا جاتا ہے؟", "options": ["Alkali Metals", "Halogens", "Noble Gases", "Transition Metals"], "answer": "Halogens"},
        {"question": "The 'Law of Octaves' was proposed by:", "urdu_question": "'آکٹیوز کا قانون' کس نے پیش کیا؟", "options": ["Dobereiner", "Newlands", "Mendeleev", "Lothar Meyer"], "answer": "Newlands"},
        {"question": "Mendeleev's periodic table was based on:", "urdu_question": "مینڈلیف کا دوری جدول کس پر مبنی تھا؟", "options": ["Atomic Number", "Atomic Mass", "Electron Configuration", "Number of Neutrons"], "answer": "Atomic Mass"},
        {"question": "Atomic size generally _______ as we move from left to right in a period.", "urdu_question": "پیریڈ میں بائیں سے دائیں جاتے ہوئے ایٹمی سائز عام طور پر _______ ہوتا ہے۔", "options": ["Increases", "Decreases", "Remains the same", "First increases then decreases"], "answer": "Decreases"},
        {"question": "Atomic size generally _______ as we move down a group.", "urdu_question": "گروپ میں نیچے کی طرف جاتے ہوئے ایٹمی سائز عام طور پر _______ ہوتا ہے۔", "options": ["Increases", "Decreases", "Remains the same", "First decreases then increases"], "answer": "Increases"},
        {"question": "The energy required to remove the most loosely bound electron from an atom is called:", "urdu_question": "ایٹم سے سب سے ڈھیلے بندھے ہوئے الیکٹران کو نکالنے کے لیے درکار توانائی کیا کہلاتی ہے؟", "options": ["Electron Affinity", "Electronegativity", "Ionization Energy", "Shielding Effect"], "answer": "Ionization Energy"},
        {"question": "Ionization energy _______ from left to right across a period.", "urdu_question": "آئنائزیشن توانائی پیریڈ میں بائیں سے دائیں _______ ہوتی ہے۔", "options": ["Increases", "Decreases", "Remains constant", "Becomes zero"], "answer": "Increases"},
        {"question": "Ionization energy _______ as we go down a group.", "urdu_question": "آئنائزیشن توانائی گروپ میں نیچے کی طرف جاتے ہوئے _______ ہوتی ہے۔", "options": ["Increases", "Decreases", "Remains constant", "Becomes unpredictable"], "answer": "Decreases"},
        {"question": "The ability of an atom to attract a shared pair of electrons is called:", "urdu_question": "ایٹم کی مشترکہ الیکٹران جوڑے کو اپنی طرف متوجہ کرنے کی صلاحیت کیا کہلاتی ہے؟", "options": ["Electron Affinity", "Electronegativity", "Ionization Energy", "Metallic Character"], "answer": "Electronegativity"},
        {"question": "Which element has the highest electronegativity?", "urdu_question": "کس عنصر کی الیکٹرونیگیٹیویٹی سب سے زیادہ ہے؟", "options": ["Chlorine", "Oxygen", "Fluorine", "Nitrogen"], "answer": "Fluorine"},
        {"question": "The decrease in attraction between the nucleus and valence electrons by inner electrons is known as:", "urdu_question": "اندرونی الیکٹرانوں کی وجہ سے نیوکلیس اور ویلنس الیکٹرانوں کے درمیان کشش میں کمی کو کیا کہتے ہیں؟", "options": ["Ionization Effect", "Shielding Effect", "Periodic Effect", "Nuclear Effect"], "answer": "Shielding Effect"},
        {"question": "Shielding effect _______ as we go down a group.", "urdu_question": "شیلڈنگ ایفیکٹ گروپ میں نیچے کی طرف جاتے ہوئے _______ ہوتا ہے۔", "options": ["Increases", "Decreases", "Remains constant", "Disappears"], "answer": "Increases"},
        {"question": "The amount of energy released when an electron is added to a neutral atom is called:", "urdu_question": "جب ایک نیوٹرل ایٹم میں ایک الیکٹران شامل کیا جاتا ہے تو خارج ہونے والی توانائی کی مقدار کیا کہلاتی ہے؟", "options": ["Ionization Energy", "Electron Affinity", "Electronegativity", "Lattice Energy"], "answer": "Electron Affinity"},
        {"question": "Elements with high ionization energy are typically:", "urdu_question": "زیادہ آئنائزیشن توانائی والے عناصر عام طور پر ہوتے ہیں:", "options": ["Metals", "Non-metals", "Metalloids", "Gases"], "answer": "Non-metals"},
        {"question": "Which group contains the noble gases?", "urdu_question": "نوبل گیسیں کس گروپ میں شامل ہیں؟", "options": ["Group 1", "Group 2", "Group 17", "Group 18"], "answer": "Group 18"},
        {"question": "Elements in the s-block and p-block are called:", "urdu_question": "s-بلاک اور p-بلاک کے عناصر کیا کہلاتے ہیں؟", "options": ["Transition elements", "Representative elements", "Lanthanides", "Actinides"], "answer": "Representative elements"},
        {"question": "The first period of the periodic table contains how many elements?", "urdu_question": "دوری جدول کے پہلے پیریڈ میں کتنے عناصر ہیں؟", "options": ["2", "8", "18", "1"], "answer": "2"},
        {"question": "Which of the following is an alkaline earth metal?", "urdu_question": "درج ذیل میں سے کون ایک الکلائن ارتھ میٹل ہے؟", "options": ["Sodium (Na)", "Potassium (K)", "Calcium (Ca)", "Iron (Fe)"], "answer": "Calcium (Ca)"},
        {"question": "The scientist who discovered the relationship between atomic number and X-ray frequency was:", "urdu_question": "وہ سائنسدان جس نے ایٹمی نمبر اور ایکس رے فریکوئنسی کے درمیان تعلق دریافت کیا، کون تھا؟", "options": ["Mendeleev", "Rutherford", "Moseley", "Bohr"], "answer": "Moseley"},
        {"question": "Electronegativity _______ from left to right in a period.", "urdu_question": "الیکٹرونیگیٹیویٹی پیریڈ میں بائیں سے دائیں _______ ہوتی ہے۔", "options": ["Increases", "Decreases", "Remains the same", "Cannot be determined"], "answer": "Increases"},
        {"question": "The shielding effect remains almost the same within a:", "urdu_question": "شیلڈنگ ایفیکٹ کس میں تقریباً یکساں رہتا ہے؟", "options": ["Group", "Period", "Block", "Subshell"], "answer": "Period"},
        {"question": "Which of the following elements is a metalloid?", "urdu_question": "درج ذیل میں سے کون سا عنصر میٹالائیڈ ہے؟", "options": ["Sodium (Na)", "Chlorine (Cl)", "Silicon (Si)", "Argon (Ar)"], "answer": "Silicon (Si)"},
        {"question": "The d-block elements are also known as:", "urdu_question": "d-بلاک کے عناصر کو _______ بھی کہا جاتا ہے۔", "options": ["Alkali metals", "Halogens", "Transition metals", "Noble gases"], "answer": "Transition metals"},
        {"question": "The atomic radius is measured in:", "urdu_question": "ایٹمی رداس کس میں ماپا جاتا ہے؟", "options": ["Nanometers (nm)", "Picometers (pm)", "Centimeters (cm)", "Both A and B"], "answer": "Both A and B"},
        {"question": "Which of these has the largest atomic radius?", "urdu_question": "ان میں سے کس کا ایٹمی رداس سب سے بڑا ہے؟", "options": ["Na", "Mg", "Al", "Si"], "answer": "Na"},
        {"question": "Which of these has the smallest atomic radius?", "urdu_question": "ان میں سے کس کا ایٹمی رداس سب سے چھوٹا ہے؟", "options": ["Li", "Na", "K", "Rb"], "answer": "Li"},
        {"question": "The second and third periods contain how many elements?", "urdu_question": "دوسرے اور تیسرے پیریڈ میں کتنے عناصر ہوتے ہیں؟", "options": ["2", "8", "18", "32"], "answer": "8"},
        {"question": "The Lanthanide series belongs to which block?", "urdu_question": "لنتھانائیڈ سیریز کا تعلق کس بلاک سے ہے؟", "options": ["s-block", "p-block", "d-block", "f-block"], "answer": "f-block"},
        {"question": "Elements of Group 2 are called:", "urdu_question": "گروپ 2 کے عناصر کیا کہلاتے ہیں؟", "options": ["Alkali Metals", "Alkaline Earth Metals", "Halogens", "Noble Gases"], "answer": "Alkaline Earth Metals"},
        {"question": "Which property describes the tendency to lose electrons?", "urdu_question": "کون سی خاصیت الیکٹران کھونے کے رجحان کو بیان کرتی ہے؟", "options": ["Electronegativity", "Electron Affinity", "Metallic Character", "Non-metallic Character"], "answer": "Metallic Character"},
        {"question": "Metallic character _______ down a group.", "urdu_question": "دھاتی خصوصیت گروپ میں نیچے کی طرف _______ ہوتی ہے۔", "options": ["Increases", "Decreases", "Remains the same", "Becomes zero"], "answer": "Increases"},
        {"question": "Non-metallic character _______ across a period from left to right.", "urdu_question": "غیر دھاتی خصوصیت پیریڈ میں بائیں سے دائیں _______ ہوتی ہے۔", "options": ["Increases", "Decreases", "Remains the same", "Disappears"], "answer": "Increases"},
        {"question": "Which of the following is the most reactive metal?", "urdu_question": "درج ذیل میں سے کون سی سب سے زیادہ تعامل پذیر دھات ہے؟", "options": ["Sodium (Na)", "Magnesium (Mg)", "Potassium (K)", "Calcium (Ca)"], "answer": "Potassium (K)"},
        {"question": "Which of the following is the most reactive non-metal?", "urdu_question": "درج ذیل میں سے کون سی سب سے زیادہ تعامل پذیر غیر دھات ہے؟", "options": ["Fluorine (F)", "Chlorine (Cl)", "Bromine (Br)", "Iodine (I)"], "answer": "Fluorine (F)"},
        {"question": "Mendeleev left gaps in his periodic table for:", "urdu_question": "مینڈلیف نے اپنے دوری جدول میں کس کے لیے خالی جگہیں چھوڑی تھیں؟", "options": ["Noble gases", "Transition metals", "Undiscovered elements", "Isotopes"], "answer": "Undiscovered elements"},
        {"question": "The first element in the periodic table is:", "urdu_question": "دوری جدول میں پہلا عنصر ہے:", "options": ["Helium", "Lithium", "Hydrogen", "Oxygen"], "answer": "Hydrogen"},
        {"question": "Elements in the same group have the same number of:", "urdu_question": "ایک ہی گروپ کے عناصر میں کس کی تعداد یکساں ہوتی ہے؟", "options": ["Protons", "Neutrons", "Energy shells", "Valence electrons"], "answer": "Valence electrons"},
        {"question": "Elements in the same period have the same number of:", "urdu_question": "ایک ہی پیریڈ کے عناصر میں کس کی تعداد یکساں ہوتی ہے؟", "options": ["Protons", "Valence electrons", "Energy shells", "Neutrons"], "answer": "Energy shells"},
        {"question": "The valency of Group 1 elements is:", "urdu_question": "گروپ 1 کے عناصر کی ویلنسی کیا ہے؟", "options": ["1", "2", "7", "8"], "answer": "1"},
        {"question": "The valency of Group 17 elements is:", "urdu_question": "گروپ 17 کے عناصر کی ویلنسی کیا ہے؟", "options": ["1", "2", "7", "17"], "answer": "1"},
        {"question": "Which of these is a transition metal?", "urdu_question": "ان میں سے کون ایک ٹرانزیشن میٹل ہے؟", "options": ["Ca", "Al", "Fe", "P"], "answer": "Fe"},
        {"question": "Electron affinity values are generally high for which group?", "urdu_question": "الیکٹران ایفینیٹی کی قدریں عام طور پر کس گروپ کے لیے زیادہ ہوتی ہیں؟", "options": ["Group 1", "Group 2", "Group 17 (Halogens)", "Group 18 (Noble Gases)"], "answer": "Group 17 (Halogens)"},
        {"question": "The size of a positive ion (cation) is _______ than its parent atom.", "urdu_question": "ایک مثبت آئن (کیٹائن) کا سائز اپنے پیرنٹ ایٹم سے _______ ہوتا ہے۔", "options": ["Larger", "Smaller", "The same", "Twice the size"], "answer": "Smaller"},
        {"question": "The size of a negative ion (anion) is _______ than its parent atom.", "urdu_question": "ایک منفی آئن (اینائن) کا سائز اپنے پیرنٹ ایٹم سے _______ ہوتا ہے۔", "options": ["Larger", "Smaller", "The same", "Half the size"], "answer": "Larger"},
        {"question": "What is the family name for Group 2 elements?", "urdu_question": "گروپ 2 کے عناصر کا خاندانی نام کیا ہے؟", "options": ["Alkali Metals", "Alkaline Earth Metals", "Boron Family", "Carbon Family"], "answer": "Alkaline Earth Metals"},
        {"question": "How many valence electrons does a noble gas have (except Helium)?", "urdu_question": "ایک نوبل گیس (ہیلیم کے علاوہ) کے کتنے ویلنس الیکٹران ہوتے ہیں؟", "options": ["1", "2", "7", "8"], "answer": "8"},
        {"question": "The fourth period starts with which element?", "urdu_question": "چوتھا پیریڈ کس عنصر سے شروع ہوتا ہے؟", "options": ["Sodium (Na)", "Potassium (K)", "Calcium (Ca)", "Rubidium (Rb)"], "answer": "Potassium (K)"},
        {"question": "The Actinide series is part of which period?", "urdu_question": "ایکٹینائیڈ سیریز کس پیریڈ کا حصہ ہے؟", "options": ["5", "6", "7", "8"], "answer": "7"},
        {"question": "Who is considered the father of the modern periodic table?", "urdu_question": "جدید دوری جدول کا بانی کسے سمجھا جاتا ہے؟", "options": ["Dobereiner", "Newlands", "Mendeleev", "Moseley"], "answer": "Mendeleev"},
        {"question": "Which of these elements is in the p-block?", "urdu_question": "ان میں سے کون سا عنصر p-بلاک میں ہے؟", "options": ["Sodium (Na)", "Iron (Fe)", "Chlorine (Cl)", "Hydrogen (H)"], "answer": "Chlorine (Cl)"},
        {"question": "The tendency of an atom to form a chemical bond is related to its:", "urdu_question": "ایٹم کا کیمیائی بانڈ بنانے کا رجحان اس کے _______ سے متعلق ہے۔", "options": ["Number of neutrons", "Mass number", "Valence electrons", "Atomic size"], "answer": "Valence electrons"},
        {"question": "Which element is located in Period 3, Group 13?", "urdu_question": "کون سا عنصر پیریڈ 3، گروپ 13 میں واقع ہے؟", "options": ["Boron (B)", "Aluminium (Al)", "Gallium (Ga)", "Silicon (Si)"], "answer": "Aluminium (Al)"},
        {"question": "The periodic repetition of properties of elements is called:", "urdu_question": "عناصر کی خصوصیات کی دوری تکرار کو کیا کہتے ہیں؟", "options": ["Periodicity", "Atomic structure", "Isotopy", "Allotropy"], "answer": "Periodicity"},
        {"question": "Which of the following has the lowest ionization energy?", "urdu_question": "درج ذیل میں سے کس کی آئنائزیشن توانائی سب سے کم ہے؟", "options": ["Li", "Be", "B", "C"], "answer": "Li"},
        {"question": "The long form of the periodic table is constructed on the basis of:", "urdu_question": "دوری جدول کی طویل شکل کس کی بنیاد پر بنائی گئی ہے؟", "options": ["Mendeleev's periodic law", "Modern periodic law", "Law of triads", "Law of octaves"], "answer": "Modern periodic law"},
        {"question": "What is the block of elements with valence electrons in the 'f' orbitals called?", "urdu_question": "'f' آربیٹلز میں ویلنس الیکٹران والے عناصر کا بلاک کیا کہلاتا ہے؟", "options": ["s-block", "p-block", "d-block", "f-block"], "answer": "f-block"},
        {"question": "Which of these is a halogen?", "urdu_question": "ان میں سے کون ایک ہیلوجن ہے؟", "options": ["Oxygen (O)", "Nitrogen (N)", "Bromine (Br)", "Neon (Ne)"], "answer": "Bromine (Br)"},
        {"question": "In Newlands' classification, elements were arranged in increasing order of their:", "urdu_question": "نیولینڈز کی درجہ بندی میں، عناصر کو ان کے _______ کی بڑھتی ہوئی ترتیب میں رکھا گیا تھا۔", "options": ["Atomic numbers", "Atomic masses", "Number of electrons", "Densities"], "answer": "Atomic masses"},
        {"question": "The first attempt to classify elements was made by:", "urdu_question": "عناصر کی درجہ بندی کی پہلی کوشش کس نے کی؟", "options": ["Dobereiner", "Mendeleev", "Al-Razi", "Newlands"], "answer": "Al-Razi"},
        {"question": "Why does atomic size decrease across a period?", "urdu_question": "پیریڈ میں ایٹمی سائز کیوں کم ہوتا ہے؟", "options": ["Number of shells increases", "Effective nuclear charge increases", "Shielding effect increases", "Number of protons decreases"], "answer": "Effective nuclear charge increases"},
        {"question": "Why does ionization energy decrease down a group?", "urdu_question": "گروپ میں نیچے کی طرف آئنائزیشن توانائی کیوں کم ہوتی ہے؟", "options": ["Nuclear charge decreases", "Atomic size decreases", "Shielding effect increases", "Number of electrons decreases"], "answer": "Shielding effect increases"},
        {"question": "Which group has the lowest ionization energies?", "urdu_question": "کس گروپ کی آئنائزیشن توانائیاں سب سے کم ہوتی ہیں؟", "options": ["Group 1 (Alkali Metals)", "Group 2 (Alkaline Earth)", "Group 17 (Halogens)", "Group 18 (Noble Gases)"], "answer": "Group 1 (Alkali Metals)"},
        {"question": "The second ionization energy of an element is always _______ than the first.", "urdu_question": "ایک عنصر کی دوسری آئنائزیشن توانائی ہمیشہ پہلی سے _______ ہوتی ہے۔", "options": ["Higher", "Lower", "Equal", "Zero"], "answer": "Higher"},
        {"question": "Electron affinity of noble gases is practically:", "urdu_question": "نوبل گیسوں کی الیکٹران ایفینیٹی عملی طور پر ہوتی ہے:", "options": ["Very high", "Very low", "Zero", "Infinite"], "answer": "Zero"},
        {"question": "Which of these is the least electronegative element?", "urdu_question": "ان میں سے کون سا سب سے کم الیکٹرونیگیٹیو عنصر ہے؟", "options": ["F", "Cl", "Br", "I"], "answer": "I"},
        {"question": "The periodic table provides a basic framework to study the properties of:", "urdu_question": "دوری جدول کس کی خصوصیات کا مطالعہ کرنے کے لیے ایک بنیادی ڈھانچہ فراہم کرتا ہے؟", "options": ["Compounds", "Elements", "Mixtures", "Molecules"], "answer": "Elements"},
        {"question": "Sodium (Na) belongs to which period?", "urdu_question": "سوڈیم (Na) کا تعلق کس پیریڈ سے ہے؟", "options": ["Period 1", "Period 2", "Period 3", "Period 4"], "answer": "Period 3"},
        {"question": "Which element has the atomic number 30?", "urdu_question": "کس عنصر کا ایٹمی نمبر 30 ہے؟", "options": ["Copper (Cu)", "Zinc (Zn)", "Iron (Fe)", "Nickel (Ni)"], "answer": "Zinc (Zn)"},
        {"question": "The Lanthanides and Actinides are placed where in the periodic table?", "urdu_question": "لنتھانائیڈز اور ایکٹینائیڈز کو دوری جدول میں کہاں رکھا گیا ہے؟", "options": ["In the middle", "On the right side", "On the left side", "Separately at the bottom"], "answer": "Separately at the bottom"},
        {"question": "Which of these is a property of metals?", "urdu_question": "ان میں سے کون سی دھاتوں کی خاصیت ہے؟", "options": ["Poor conductors of heat", "Form acidic oxides", "Good conductors of electricity", "Are brittle"], "answer": "Good conductors of electricity"},
        {"question": "Which of these is a property of non-metals?", "urdu_question": "ان میں سے کون سی غیر دھاتوں کی خاصیت ہے؟", "options": ["Are lustrous", "Are malleable", "Are brittle in solid state", "Form basic oxides"], "answer": "Are brittle in solid state"},
        {"question": "The element 'Eka-silicon' predicted by Mendeleev was later discovered and named:", "urdu_question": "مینڈلیف کی طرف سے پیش گوئی کیا گیا عنصر 'ایکا سلیکون' بعد میں دریافت ہوا اور اس کا نام رکھا گیا:", "options": ["Gallium", "Germanium", "Scandium", "Technetium"], "answer": "Germanium"},
        {"question": "How many elements are in the 6th period?", "urdu_question": "چھٹے پیریڈ میں کتنے عناصر ہیں؟", "options": ["8", "18", "32", "16"], "answer": "32"},
        {"question": "The most abundant element in the Earth's crust is:", "urdu_question": "زمین کی کرسٹ میں سب سے زیادہ پایا جانے والا عنصر ہے:", "options": ["Silicon", "Aluminum", "Oxygen", "Iron"], "answer": "Oxygen"},
        {"question": "The block of an element is determined by its:", "urdu_question": "ایک عنصر کا بلاک کس سے متعین ہوتا ہے؟", "options": ["Outermost shell", "Valence subshell", "Number of protons", "Atomic mass"], "answer": "Valence subshell"},
        {"question": "Which element is in Group 15, Period 2?", "urdu_question": "کون سا عنصر گروپ 15، پیریڈ 2 میں ہے؟", "options": ["Phosphorus (P)", "Arsenic (As)", "Nitrogen (N)", "Antimony (Sb)"], "answer": "Nitrogen (N)"},
        {"question": "The ability of metals to be drawn into wires is called:", "urdu_question": "دھاتوں کی تاروں میں کھینچے جانے کی صلاحیت کو کیا کہتے ہیں؟", "options": ["Malleability", "Ductility", "Lustre", "Conductivity"], "answer": "Ductility"},
        {"question": "The ability of metals to be hammered into sheets is called:", "urdu_question": "دھاتوں کی چادروں میں ڈھلنے کی صلاحیت کو کیا کہتے ہیں؟", "options": ["Malleability", "Ductility", "Lustre", "Conductivity"], "answer": "Malleability"},
        {"question": "Which of these forms a positive ion most easily?", "urdu_question": "ان میں سے کون سب سے آسانی سے مثبت آئن بناتا ہے؟", "options": ["Na", "Mg", "Al", "Si"], "answer": "Na"},
        {"question": "The number of valence electrons _______ from left to right across a period.", "urdu_question": "ویلنس الیکٹرانوں کی تعداد پیریڈ میں بائیں سے دائیں _______ ہوتی ہے۔", "options": ["Increases", "Decreases", "Remains constant", "Is always 8"], "answer": "Increases"},
        {"question": "Which of these has chemical properties similar to Magnesium (Mg)?", "urdu_question": "ان میں سے کس کی کیمیائی خصوصیات میگنیشیم (Mg) سے ملتی جلتی ہیں؟", "options": ["Sodium (Na)", "Calcium (Ca)", "Aluminium (Al)", "Potassium (K)"], "answer": "Calcium (Ca)"},
        {"question": "The 'bridge elements' is another name for:", "urdu_question": "'برج عناصر' کس کا دوسرا نام ہے؟", "options": ["Typical elements of Period 2", "Typical elements of Period 3", "Transition elements", "Noble gases"], "answer": "Typical elements of Period 3"},
        {"question": "Which period is known as the incomplete period?", "urdu_question": "کون سا پیریڈ نامکمل پیریڈ کہلاتا ہے؟", "options": ["Period 4", "Period 5", "Period 6", "Period 7"], "answer": "Period 7"},
        {"question": "Which of these is the most common halogen?", "urdu_question": "ان میں سے کون سا سب سے عام ہیلوجن ہے؟", "options": ["Fluorine", "Chlorine", "Bromine", "Iodine"], "answer": "Chlorine"},
        {"question": "The element with atomic number 56 belongs to which block?", "urdu_question": "ایٹمی نمبر 56 والا عنصر کس بلاک سے تعلق رکھتا ہے؟", "options": ["s-block", "p-block", "d-block", "f-block"], "answer": "s-block"},
        {"question": "The elements of Group 1 and 2 are strong:", "urdu_question": "گروپ 1 اور 2 کے عناصر مضبوط _______ ہیں۔", "options": ["Oxidizing agents", "Reducing agents", "Dehydrating agents", "Acids"], "answer": "Reducing agents"},
        {"question": "The modern periodic table is a graphical representation of the:", "urdu_question": "جدید دوری جدول کس کی گرافیکل نمائندگی ہے؟", "options": ["Periodic Law", "Law of Octaves", "Law of Triads", "Atomic Theory"], "answer": "Periodic Law"},
        {"question": "An element in Period 3 has how many electron shells?", "urdu_question": "پیریڈ 3 کے ایک عنصر میں کتنے الیکٹران شیل ہوتے ہیں؟", "options": ["1", "2", "3", "4"], "answer": "3"}
    ];
    
    // --- State and DOM Elements ---
    let phoneRecords = JSON.parse(localStorage.getItem('phoneRecords')) || [];
    let questions = [];
    let current_question_index = 0;
    let score = 0;
    let correctAnswers = 0;
    let incorrectAnswers = 0;
    let userName = '';
    let userDetail = '';
    let userPhone = '';
    let timerId = null;

    const allScreens = document.querySelectorAll('.screen');
    const loginScreen = document.getElementById('login-screen');
    const quizScreen = document.getElementById('quiz-screen');
    const resultsScreen = document.getElementById('results-screen');
    
    const nameEntry = document.getElementById('name-entry');
    const detailEntry = document.getElementById('detail-entry');
    const phoneEntry = document.getElementById('phone-entry');
    const startQuizBtn = document.getElementById('start-quiz-btn');
    
    const welcomeText = document.querySelector('.welcome-text');
    const progressLabel = document.getElementById('progress-label');
    const scoreLabel = document.getElementById('score-label');
    const questionEng = document.getElementById('question-eng');
    const questionUrdu = document.getElementById('question-urdu');
    const optionsContainer = document.getElementById('options-container');
    const feedbackLabel = document.getElementById('feedback-label');
    const answerInput = document.getElementById('answer-input');

    const resultsSummary = document.getElementById('results-summary');
    const playAgainBtn = document.getElementById('play-again-btn');
    const mainMenuBtn = document.getElementById('main-menu-btn');
    
    const recordModal = document.getElementById('record-modal');
    const viewRecordBtn = document.getElementById('view-record-btn');
    const closeBtn = recordModal.querySelector('.close-button');
    const recordDetails = document.getElementById('record-details');
    const printRecordBtn = document.getElementById('print-record-btn');
    
    const sidebarUnlockView = document.getElementById('sidebar-unlock-view');
    const sidebarContentView = document.getElementById('sidebar-content-view');
    const unlockRecordsBtn = document.getElementById('unlock-records-btn');
    const adminPasswordInput = document.getElementById('admin-password');
    const backToMenuBtn = document.getElementById('back-to-menu-btn');

    // --- Core Functions ---
    
    function shuffleArray(array) {
        return [...array].sort(() => Math.random() - 0.5);
    }

    function showScreen(screen) {
        allScreens.forEach(s => s.classList.remove('active'));
        screen.classList.add('active');
    }
    
    function validateForm() {
        const isNameValid = nameEntry.value.trim() !== '';
        const isDetailValid = detailEntry.value.trim() !== '';
        const isPhoneValid = /^\d{11}$/.test(phoneEntry.value.trim());
        startQuizBtn.disabled = !(isNameValid && isDetailValid && isPhoneValid);
    }

    function startQuiz() {
        userName = nameEntry.value.trim();
        userDetail = detailEntry.value.trim();
        userPhone = phoneEntry.value.trim(); 

        const record = { name: userName, phone: userPhone, date: new Date().toLocaleDateString() };
        phoneRecords.push(record);
        localStorage.setItem('phoneRecords', JSON.stringify(phoneRecords));
        if (!sidebarContentView.classList.contains('hidden')) {
            loadRecordsToSidebar();
        }
        
        current_question_index = 0;
        score = 0;
        correctAnswers = 0;
        incorrectAnswers = 0;
        questions = shuffleArray(questions_data);
        
        welcomeText.textContent = `Welcome, ${userName}!`;
        scoreLabel.textContent = `Score: ${score}`;
        
        document.querySelector('.subtitle').textContent = 'Chapter 3: Periodic Table and Periodicity of Properties';
        document.querySelector('.quiz-title').textContent = 'Chapter 3 Quiz';
        
        showScreen(quizScreen);
        displayQuestion();
    }

    function displayQuestion() {
        clearTimeout(timerId);
        feedbackLabel.innerHTML = "";
        optionsContainer.innerHTML = "";
        answerInput.value = "";
        answerInput.disabled = false;
        answerInput.focus();

        if (current_question_index < questions.length) {
            const q_data = questions[current_question_index];
            progressLabel.textContent = `Question: ${current_question_index + 1} / ${questions.length}`;
            questionEng.textContent = q_data.question;
            questionUrdu.textContent = q_data.urdu_question;

            q_data.options.forEach(option => {
                const div = document.createElement('div');
                div.className = 'option-display';
                div.textContent = option;
                optionsContainer.appendChild(div);
            });
            
            answerInput.dataset.correct = q_data.answer;
        } else {
            showResults();
        }
    }

    function checkAnswer() {
        const userAnswer = answerInput.value.trim();
        const correctAnswer = answerInput.dataset.correct;
        
        if (answerInput.disabled) return;

        answerInput.disabled = true;

        if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
            score++;
            correctAnswers++;
            feedbackLabel.innerHTML = `<span style="color: var(--correct-color);">Correct! (درست)</span>`;
        } else {
            incorrectAnswers++;
            feedbackLabel.innerHTML = `<span style="color: var(--wrong-color);">Wrong! (غلط)</span><br><span style="color: var(--primary-text);">Correct was: ${correctAnswer}</span>`;
        }
        
        document.querySelectorAll('.option-display').forEach(opt => {
            if (opt.textContent.toLowerCase() === correctAnswer.toLowerCase()) {
                opt.classList.add('correct');
            } else if (opt.textContent.toLowerCase() === userAnswer.toLowerCase()) {
                opt.classList.add('wrong');
            }
        });

        scoreLabel.textContent = `Score: ${score}`;
        timerId = setTimeout(nextQuestion, 2500);
    }
    
    function nextQuestion() {
        current_question_index++;
        displayQuestion();
    }

    function showResults() {
        const percentage = questions.length > 0 ? (score / questions.length) * 100 : 0;
        resultsSummary.innerHTML = `
            You answered ${score} out of ${questions.length} questions correctly.<br>
            <span class="urdu">آپ نے ${questions.length} میں سے ${score} سوالات کے صحیح جواب دیے۔</span><br>
            <strong>Final Score: ${percentage.toFixed(2)}%</strong>
        `;
        showScreen(resultsScreen);
    }

    function showLoginScreen() {
        nameEntry.value = "";
        detailEntry.value = "";
        phoneEntry.value = "";
        startQuizBtn.disabled = true;
        document.querySelector('.subtitle').textContent = 'Chapter 3: Periodic Table and Periodicity of Properties';
        showScreen(loginScreen);
    }

    function showPlayerRecordModal() {
        const totalAttempted = current_question_index;
        const percentage = totalAttempted > 0 ? (score / totalAttempted) * 100 : 0;
        
        recordDetails.innerHTML = `
            <p><strong>Name (نام):</strong> ${userName}</p>
            <p><strong>Class/Roll No (کلاس/رول نمبر):</strong> ${userDetail}</p>
            <p><strong>Phone No (فون نمبر):</strong> ${userPhone}</p>
            <p><strong>Attempted (حل شدہ سوالات):</strong> ${totalAttempted}</p>
            <p class="correct"><strong>Correct (درست جوابات):</strong> ${correctAnswers}</p>
            <p class="wrong"><strong>Incorrect (غلط جوابات):</strong> ${incorrectAnswers}</p>
            <p><strong>Score (اسکور):</strong> ${score}</p>
            <p class="percentage"><strong>Percentage (فیصد):</strong> ${percentage.toFixed(2)}%</p>
        `;
        recordModal.style.display = "flex";
    }

    function printRecord() {
        const recordText = `Name: ${userName}\nClass/Roll No: ${userDetail}\nPhone No: ${userPhone}\n${recordDetails.innerText}`;
        const blob = new Blob([`Shaheen School & Coaching Center\n--- Player Quiz Record ---\nChapter 3: Periodic Table and Periodicity of Properties\n\n${recordText}`], { type: 'text/plain' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = `${userName}_ch3_quiz_record.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(a.href);
    }

    function loadRecordsToSidebar() {
        sidebarContentView.innerHTML = '';
        if (phoneRecords.length === 0) {
            sidebarContentView.innerHTML = "<p>No records yet.</p>";
        } else {
            [...phoneRecords].reverse().forEach((record, index) => {
                const originalIndex = phoneRecords.length - 1 - index;
                const item = document.createElement('div');
                item.className = 'sidebar-record';
                
                const recordText = document.createElement('span');
                recordText.textContent = `${record.name} - ${record.phone}`;

                const deleteBtn = document.createElement('span');
                deleteBtn.className = 'delete-record-btn';
                deleteBtn.innerHTML = '&times;';
                deleteBtn.dataset.index = originalIndex;

                item.appendChild(recordText);
                item.appendChild(deleteBtn);
                sidebarContentView.appendChild(item);
            });
        }
    }
    
    // --- Event Listeners ---
    nameEntry.addEventListener('input', validateForm);
    detailEntry.addEventListener('input', validateForm);
    phoneEntry.addEventListener('input', validateForm);
    
    startQuizBtn.addEventListener('click', startQuiz);
    playAgainBtn.addEventListener('click', startQuiz);
    mainMenuBtn.addEventListener('click', showLoginScreen);
    
    viewRecordBtn.addEventListener('click', showPlayerRecordModal);
    closeBtn.addEventListener('click', () => recordModal.style.display = 'none');
    printRecordBtn.addEventListener('click', printRecord);
    
    backToMenuBtn.addEventListener('click', showLoginScreen);
    
    answerInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            checkAnswer();
        }
    });

    sidebarContentView.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-record-btn')) {
            const recordIndex = parseInt(event.target.dataset.index, 10);
            if (confirm('Are you sure you want to delete this record?')) {
                phoneRecords.splice(recordIndex, 1);
                localStorage.setItem('phoneRecords', JSON.stringify(phoneRecords));
                loadRecordsToSidebar();
            }
        }
    });

    unlockRecordsBtn.addEventListener('click', () => {
        if (adminPasswordInput.value === '521') {
            sidebarUnlockView.classList.add('hidden');
            sidebarContentView.classList.remove('hidden');
            loadRecordsToSidebar();
            sessionStorage.setItem('adminUnlocked', 'true');
        } else {
            alert('Incorrect Password!');
            adminPasswordInput.value = '';
        }
    });

    window.addEventListener('click', (event) => {
        if (event.target == recordModal) {
            recordModal.style.display = 'none';
        }
    });

    // Initial load for sidebar
    if (sessionStorage.getItem('adminUnlocked') === 'true') {
        sidebarUnlockView.classList.add('hidden');
        sidebarContentView.classList.remove('hidden');
        loadRecordsToSidebar();
    }
});
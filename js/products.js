(function () {
   const PRODUCTS = [
  {
    id: 'fenogal-160mg',
    name: 'Fenogal 160mg',
    division: 'Cardiology',
    category: 'Cholesterol Management',
    genericName: 'Fenofibrate',
    formSize: '160mg / Capsule / 30\'s',
    image: 'DIV 2/CARDIO/FENOGAL 1 1024x1024.jpg',
    imageAlt: 'Fenogal 160mg fenofibrate capsules',
    summary: 'Fenogal 160mg contains Fenofibrate, a lipid-lowering medication that helps reduce triglycerides and bad cholesterol (LDL) while increasing good cholesterol (HDL).',
    benefits: [
      'Supports healthy cholesterol and triglyceride levels.',
      'Reduces risk of cardiovascular disease linked to high lipids.',
      'Helps improve HDL (good cholesterol) in the body.',
      'Ideal for patients managing long-term dyslipidemia.',
      'Works best when combined with proper diet and exercise.',
    ],
    directions: [
      'Take one capsule daily or as prescribed by your physician.',
      'Use alongside a balanced diet and regular exercise for optimal results.',
    ],
    availability: 'Available in leading pharmacies and Britton partner outlets nationwide.',
    tags: ['cholesterol', 'fenofibrate', 'lipid', 'heart health'],
  },
  {
    id: 'telchor-40-12-5mg',
    name: 'Telchor 40mg/12.5mg',
    division: 'Cardiology',
    category: 'Blood Pressure Management',
    genericName: 'Telmisartan + Hydrochlorothiazide',
    formSize: 'Tablet / 30\'s',
    image: 'DIV 2/CARDIO/TELCHOR 1 1024x1024.jpg',
    imageAlt: 'Telchor 40mg/12.5mg tablets',
    summary: 'Telchor combines Telmisartan and Hydrochlorothiazide to effectively control high blood pressure by relaxing blood vessels and promoting gentle fluid excretion.',
    benefits: [
      'Helps maintain normal blood pressure levels.',
      'Reduces risk of heart attack and stroke.',
      'Combines two proven antihypertensive actions for better results.',
      'Ideal for patients requiring dual blood pressure control.',
      'Supports long-term cardiovascular protection.',
    ],
    directions: [
      'Take one tablet daily with or without food, or as directed by your physician.',
      'Do not discontinue use without medical supervision.',
    ],
    availability: 'Available in Mercury Drug, Watsons, and Britton partner outlets nationwide.',
    tags: ['hypertension', 'telmisartan', 'blood pressure', 'heart health'],
  },
  {
    id: 'telmal-40-5mg',
    name: 'Telmal 40mg/5mg',
    division: 'Cardiology',
    category: 'Hypertension and Heart Health',
    genericName: 'Telmisartan + Amlodipine (as Besilate)',
    formSize: 'Tablet / 30\'s',
    image: 'telmal-40-5mg.webp',
    imageAlt: 'Telmal 40mg/5mg tablets',
    summary: 'Telmal 40mg/5mg is a combination of Telmisartan and Amlodipine that helps manage hypertension and improve blood flow to reduce cardiovascular strain.',
    benefits: [
      'Controls blood pressure effectively with dual action.',
      'Helps prevent heart complications and strokes.',
      'Improves circulation and reduces vascular resistance.',
      'Ideal for long-term hypertension management.',
      'Provides steady 24-hour blood pressure control.',
    ],
    directions: [
      'Take once daily at the same time each day, or as prescribed by your physician.',
      'Follow a healthy lifestyle for optimal cardiovascular support.',
    ],
    availability: 'Available nationwide through leading drugstores and Britton partner outlets.',
    tags: ['telmisartan', 'amlodipine', 'hypertension', 'blood pressure'],
  },
  {
    id: 'telmal-40-10mg',
    name: 'Telmal 40mg/10mg',
    division: 'Cardiology',
    category: 'Hypertension Management',
    genericName: 'Telmisartan + Amlodipine (as Besilate)',
    formSize: 'Tablet / 30\'s',
    image: 'telmal-40-10mg.webp',
    imageAlt: 'Telmal 40mg/10mg tablets',
    summary: 'Telmal 40mg/10mg provides dual-action blood pressure control with Telmisartan and Amlodipine, formulated for patients requiring stronger antihypertensive therapy.',
    benefits: [
      'Effectively lowers high blood pressure for 24 hours.',
      'Combines two mechanisms for better vascular relaxation.',
      'Supports cardiovascular health and reduces heart strain.',
      'Helps prevent long-term complications of hypertension.',
      'Ideal for adults with moderate to severe blood pressure levels.',
    ],
    directions: [
      'Take one tablet daily or as directed by your physician.',
      'Do not stop treatment abruptly without consulting your doctor.',
    ],
    availability: 'Distributed through Mercury Drug, Watsons, and partner outlets nationwide.',
    tags: ['heart', 'hypertension', 'telmisartan', 'amlodipine', 'blood pressure'],
  },
  {
    id: 'telmal-80-5mg',
    name: 'Telmal 80mg/5mg',
    division: 'Cardiology',
    category: 'Advanced Hypertension Therapy',
    genericName: 'Telmisartan + Amlodipine (as Besilate)',
    formSize: 'Tablet / 30\'s',
    image: 'telmal-80-5mg.webp',
    imageAlt: 'Telmal 80mg/5mg tablets',
    summary: 'Telmal 80mg/5mg offers high-strength control for hypertension using a powerful combination of Telmisartan and Amlodipine for 24-hour vascular protection.',
    benefits: [
      'Provides effective control for difficult-to-manage hypertension.',
      'Improves blood flow and heart function.',
      'Reduces long-term risks of stroke and cardiac disease.',
      'Ensures sustained pressure control throughout the day.',
      'Ideal for patients needing higher dose combination therapy.',
    ],
    directions: [
      'Take once daily with water, preferably at the same time daily.',
      'Consult your physician before any dosage adjustment.',
    ],
    availability: 'Available in leading pharmacies and Britton partner medical outlets.',
    tags: ['telmisartan', 'amlodipine', 'hypertension', 'high blood pressure'],
  },
  {
    id: 'telmal-80-10mg',
    name: 'Telmal 80mg/10mg',
    division: 'Cardiology',
    category: 'High Blood Pressure Control',
    genericName: 'Telmisartan + Amlodipine (as Besilate)',
    formSize: 'Tablet / 30\'s',
    image: 'telmal-80-10mg.webp',
    imageAlt: 'Telmal 80mg/10mg tablets',
    summary: 'Telmal 80mg/10mg provides intensive management for patients with high-risk hypertension through the dual-action synergy of Telmisartan and Amlodipine.',
    benefits: [
      'Reduces elevated blood pressure quickly and effectively.',
      'Protects arteries and heart function from long-term damage.',
      'Provides 24-hour sustained control.',
      'Minimizes fluid retention and vascular stiffness.',
      'Formulated for patients requiring strong dual antihypertensive action.',
    ],
    directions: [
      'Take one tablet daily or as directed by your physician.',
      'Monitor blood pressure regularly during use.',
    ],
    availability: 'Available in major drugstores, Watsons, and Britton partner distributors nationwide.',
    tags: ['hypertension', 'blood pressure', 'amlodipine', 'telmisartan'],
  },
  {
    id: 'vaptor',
    name: 'Vaptor 10mg / 20mg',
    division: 'Cardiology',
    category: 'Cholesterol Control',
    genericName: 'Rosuvastatin Calcium',
    formSize: 'Tablet / 10\'s',
    image: 'DIV 2/CARDIO/VAPTOR 1 1024x1024.jpg',
    imageAlt: 'Vaptor rosuvastatin tablets',
    summary: 'Vaptor contains Rosuvastatin Calcium, a statin medication that helps reduce bad cholesterol (LDL) and triglycerides while increasing good cholesterol (HDL) to protect heart health.',
    benefits: [
      'Lowers bad cholesterol and triglycerides effectively.',
      'Improves overall lipid profile and supports artery health.',
      'Reduces risk of atherosclerosis and heart attack.',
      'Helps maintain long-term cardiovascular wellness.',
      'Best used alongside diet modification and exercise.',
    ],
    directions: [
      'Take one tablet daily at bedtime or as advised by your physician.',
      'Maintain a heart-healthy diet for optimal results.',
    ],
    availability: 'Distributed nationwide via Mercury Drug, Watsons, and partner outlets.',
    tags: ['rosuvastatin', 'cholesterol', 'heart health', 'lipid control'],
  },
  {
    id: 'brisat',
    name: 'Brisat',
    division: 'Pain / Rheumatology',
    category: 'Gout Management',
    genericName: 'Febuxostat',
    formSize: '40mg / Tablet / 30\'s',
    image: 'DIV 1/ORTHO RHEUMA/BRISTAT 1024x1024.jpg',
    imageAlt: 'Brisat febuxostat tablets',
    summary: 'Brisat contains Febuxostat, a xanthine oxidase inhibitor that helps lower uric acid levels in the blood for patients with gout.',
    benefits: [
      'Effectively reduces high uric acid levels.',
      'Helps prevent gout attacks and joint damage.',
      'Supports long-term management of hyperuricemia.',
      'Alternative for patients intolerant to allopurinol.',
      'Improves quality of life for gout sufferers.',
    ],
    directions: [
      'Take one tablet daily or as prescribed by your physician.',
      'Maintain adequate fluid intake during treatment.',
    ],
    availability: 'Available in leading pharmacies nationwide.',
    tags: ['gout', 'febuxostat', 'uric acid', 'arthritis'],
  },
  {
    id: 'bagabrit',
    name: 'Bagabrit',
    division: 'Neurology',
    category: 'Neuropathic Pain',
    genericName: 'Pregabalin',
    formSize: '75mg / Capsule / 30\'s',
    image: 'DIV 1/NEURO/BAGABRIT 1024x1024.jpg',
    imageAlt: 'Bagabrit pregabalin capsules',
    summary: 'Bagabrit contains Pregabalin, an anticonvulsant used to treat neuropathic pain and manage seizures.',
    benefits: [
      'Effectively relieves nerve pain and discomfort.',
      'Helps control partial onset seizures.',
      'Reduces anxiety symptoms in some patients.',
      'Supports management of diabetic neuropathy.',
      'Improves sleep quality in patients with neuropathic pain.',
    ],
    directions: [
      'Take as directed by your physician, usually 2-3 times daily.',
      'Do not stop abruptly without medical supervision.',
    ],
    availability: 'Available in major drugstores and Britton partner outlets.',
    tags: ['neuropathic pain', 'pregabalin', 'seizures', 'nerve pain'],
  },
  {
    id: 'lumark-500',
    name: 'Lumark 500',
    division: 'Neurology',
    category: 'Seizure Control',
    genericName: 'Levetiracetam',
    formSize: 'Tablet / 30\'s',
    image: 'DIV 1/NEURO/LUMARK.jpg',
    imageAlt: 'Lumark 500 levetiracetam tablets',
    summary: 'Lumark 500 contains Levetiracetam, an antiepileptic medication used to control seizures in epilepsy patients.',
    benefits: [
      'Effectively controls partial and generalized seizures.',
      'Well-tolerated with few drug interactions.',
      'Suitable for adjunctive therapy in epilepsy.',
      'Helps maintain seizure-free periods.',
      'Supports comprehensive epilepsy management.',
    ],
    directions: [
      'Take as prescribed by your neurologist.',
      'Maintain regular dosing schedule for optimal control.',
    ],
    availability: 'Available in neurological specialty centers and partner pharmacies.',
    tags: ['epilepsy', 'levetiracetam', 'seizures', 'anticonvulsant'],
  },
  {
    id: 'memoking',
    name: 'Memoking',
    division: 'Neurology',
    category: 'Cognitive Support',
    genericName: 'Panax Ginseng + Bacopa Monniera',
    formSize: 'Capsule / 30\'s',
    image: 'OTC/memoking 1 1024x1024.jpg',
    imageAlt: 'Memoking cognitive support capsules',
    summary: 'Memoking combines traditional herbs Panax Ginseng and Bacopa Monniera to support cognitive function and memory enhancement.',
    benefits: [
      'Supports memory retention and recall.',
      'Enhances mental clarity and focus.',
      'Helps reduce mental fatigue.',
      'Supports overall brain health.',
      'Natural cognitive enhancement solution.',
    ],
    directions: [
      'Take one capsule daily or as directed.',
      'Use consistently for optimal cognitive benefits.',
    ],
    availability: 'Available in health stores and partner pharmacies nationwide.',
    tags: ['memory', 'cognitive', 'ginseng', 'bacopa', 'brain health'],
  },
  {
    id: 'selegos-5mg',
    name: 'Selegos 5mg',
    division: 'Neurology',
    category: 'Parkinson\'s Disease',
    genericName: 'Selegiline Hydrochloride',
    formSize: 'Tablet / 50\'s',
    image: 'selegos-5mg.webp',
    imageAlt: 'Selegos 5mg selegiline tablets',
    summary: 'Selegos 5mg contains Selegiline Hydrochloride, used in the management of Parkinson\'s disease symptoms.',
    benefits: [
      'Helps control Parkinson\'s disease symptoms.',
      'May slow disease progression in early stages.',
      'Reduces \'off\' time in levodopa-treated patients.',
      'Improves motor function and mobility.',
      'Supports comprehensive Parkinson\'s management.',
    ],
    directions: [
      'Take as prescribed by your neurologist.',
      'Usually taken twice daily, with breakfast and lunch.',
    ],
    availability: 'Available in neurological specialty centers and major pharmacies.',
    tags: ['parkinsons', 'selegiline', 'movement disorder', 'neurology'],
  },
  {
    id: 'asthin-force-6',
    name: 'Asthin Force 6 (Quidfast)',
    division: 'Immunology & Antioxidants',
    category: 'Antioxidant Support',
    genericName: 'Haematococcus Pluvialis Extract (Natural Astaxanthin)',
    formSize: 'Box / 20\'s',
    image: 'OTC/asthin force 6 quidfast 1024x1024.jpg',
    imageAlt: 'Asthin Force 6 natural astaxanthin capsules',
    summary: 'Asthin Force 6 provides powerful antioxidant protection with natural astaxanthin from Haematococcus Pluvialis extract.',
    benefits: [
      'Powerful antioxidant protection against oxidative stress.',
      'Supports skin health and reduces UV damage.',
      'Enhances eye health and visual acuity.',
      'Supports joint and muscle recovery.',
      'Boosts immune system function.',
    ],
    directions: [
      'Take one capsule daily with meals.',
      'Use consistently for optimal antioxidant benefits.',
    ],
    availability: 'Available in health stores and partner pharmacies.',
    tags: ['antioxidant', 'astaxanthin', 'immune support', 'skin health'],
  },
  {
    id: 'b-lite',
    name: 'B-Lite',
    division: 'Immunology & Antioxidants',
    category: 'Skin Whitening & Antioxidant',
    genericName: 'Glutathione 500mg + Vitamin C 100mg',
    formSize: 'Capsule / 30\'s',
    image: 'OTC/BLITE 1024x1024.jpg',
    imageAlt: 'B-Lite glutathione and vitamin C capsules',
    summary: 'B-Lite combines Glutathione and Vitamin C to provide antioxidant support and promote skin whitening and overall health.',
    benefits: [
      'Promotes skin whitening and even complexion.',
      'Powerful antioxidant protection.',
      'Supports liver detoxification.',
      'Enhances immune system function.',
      'Helps reduce oxidative stress damage.',
    ],
    directions: [
      'Take one capsule daily or as directed.',
      'Use with adequate water intake.',
    ],
    availability: 'Available in beauty stores and partner pharmacies nationwide.',
    tags: ['glutathione', 'skin whitening', 'antioxidant', 'vitamin c'],
  },
  {
    id: 'colostrimune',
    name: 'Colostrimune',
    division: 'Immunology & Antioxidants',
    category: 'Immune Support',
    genericName: 'Colostrum Chewable',
    formSize: 'Tablet / 30\'s',
    image: 'colostrimune.webp',
    imageAlt: 'Colostrimune colostrum chewable tablets',
    summary: 'Colostrimune provides bovine colostrum in chewable form to support immune function and overall health.',
    benefits: [
      'Supports immune system function.',
      'Provides natural antibodies and immunoglobulins.',
      'Supports gut health and integrity.',
      'Helps maintain overall wellness.',
      'Easy-to-take chewable formulation.',
    ],
    directions: [
      'Chew one tablet daily or as directed.',
      'May be taken with or without food.',
    ],
    availability: 'Available in health stores and partner pharmacies.',
    tags: ['colostrum', 'immune support', 'chewable', 'gut health'],
  },
  {
    id: 'imboost-force-caplet',
    name: 'Imboost Force Caplet',
    division: 'Immunology & Antioxidants',
    category: 'Immune Booster',
    genericName: 'Echinacea Purpurea + Black Elderberry + Zinc',
    formSize: 'Caplet / 30\'s',
    image: 'OTC/imboost caplet 1024x1024.jpg',
    imageAlt: 'Imboost Force immune support caplets',
    summary: 'Imboost Force combines Echinacea, Elderberry, and Zinc to provide comprehensive immune system support.',
    benefits: [
      'Boosts immune system function.',
      'Helps reduce duration of common colds.',
      'Provides antioxidant protection.',
      'Supports respiratory health.',
      'Enhances natural defense mechanisms.',
    ],
    directions: [
      'Take one caplet daily or as directed.',
      'Increase dosage during cold and flu season as needed.',
    ],
    availability: 'Available in pharmacies and health stores nationwide.',
    tags: ['immune booster', 'echinacea', 'elderberry', 'zinc', 'cold prevention'],
  },
  {
    id: 'imboost-force-syrup',
    name: 'Imboost Force Syrup',
    division: 'Immunology & Antioxidants',
    category: 'Pediatric Immune Support',
    genericName: 'Echinacea Purpurea + Black Elderberry + Zinc Picolinate',
    formSize: 'Syrup / 120mL',
    image: 'OTC/imboost syrup 1 1024x1024.jpg',
    imageAlt: 'Imboost Force immune support syrup',
    summary: 'Imboost Force Syrup provides immune support in liquid form, suitable for children and adults who prefer syrup formulations.',
    benefits: [
      'Supports immune function in children and adults.',
      'Easy-to-take liquid formulation.',
      'Helps prevent seasonal illnesses.',
      'Provides essential immune-supporting nutrients.',
      'Pleasant-tasting syrup for better compliance.',
    ],
    directions: [
      'Take as directed based on age and weight.',
      'Shake well before use.',
    ],
    availability: 'Available in pharmacies nationwide.',
    tags: ['immune syrup', 'childrens health', 'elderberry', 'zinc', 'liquid formula'],
  },
  {
    id: 'hepanorm',
    name: 'Hepanorm',
    division: 'Hepatology',
    category: 'Liver Support',
    genericName: 'Silymarin + Vitamin B Complex',
    formSize: 'Capsule / 30\'s',
    image: 'OTC/hepanorm 1 1024x1024.jpg',
    imageAlt: 'Hepanorm liver support capsules',
    summary: 'Hepanorm combines Silymarin (milk thistle extract) with Vitamin B Complex to support liver health and function.',
    benefits: [
      'Supports liver detoxification processes.',
      'Helps protect liver cells from damage.',
      'Supports liver regeneration.',
      'Provides essential B vitamins for energy metabolism.',
      'Ideal for liver health maintenance.',
    ],
    directions: [
      'Take one capsule daily or as directed.',
      'Use with meals for better absorption.',
    ],
    availability: 'Available in pharmacies and health stores nationwide.',
    tags: ['liver support', 'silymarin', 'milk thistle', 'detox', 'vitamin b'],
  },
  {
    id: 'lindell',
    name: 'Lindell 30mL / 60mL',
    division: 'Dermatology',
    category: 'Scabies Treatment',
    genericName: 'Permethrin Lotion',
    formSize: '30mL or 60mL / Bottle / 1\'s',
    image: 'OTC/lindell 30ml 1024x1024.jpg',
    imageAlt: 'Lindell permethrin lotion',
    summary: 'Lindell contains Permethrin, a topical treatment for scabies infestation and lice treatment.',
    benefits: [
      'Effectively treats scabies infestations.',
      'Kills scabies mites and their eggs.',
      'Also effective against head lice.',
      'Topical application for targeted treatment.',
      'Single application often sufficient.',
    ],
    directions: [
      'Apply from neck to feet, leave on 8-14 hours, then wash off.',
      'Repeat after 7 days if necessary.',
    ],
    availability: 'Available in pharmacies nationwide.',
    tags: ['scabies', 'permethrin', 'lice', 'skin treatment'],
  },
  {
    id: 'tricort-cream',
    name: 'Tricort Cream 0.1%',
    division: 'Dermatology',
    category: 'Topical Steroid',
    genericName: 'Triamcinolone Acetonide',
    formSize: '5g / Tube / 1\'s',
    image: 'DIV 1/PEDIA DERMA OB/TRICORT CREAM 1024x1024.jpg',
    imageAlt: 'Tricort triamcinolone cream',
    summary: 'Tricort Cream contains Triamcinolone Acetonide, a topical corticosteroid for inflammatory skin conditions.',
    benefits: [
      'Reduces inflammation and itching.',
      'Treats various dermatological conditions.',
      'Fast relief from skin irritation.',
      'Multiple skin condition applications.',
      'Clinically proven effectiveness.',
    ],
    directions: [
      'Apply thin layer to affected area 2-3 times daily.',
      'Do not use on face unless directed by physician.',
    ],
    availability: 'Available in pharmacies nationwide.',
    tags: ['eczema', 'psoriasis', 'steroid cream', 'skin inflammation'],
  },
  {
    id: 'tricort-scalp-lotion',
    name: 'Tricort Scalp Lotion',
    division: 'Dermatology',
    category: 'Scalp Treatment',
    genericName: 'Triamcinolone Acetonide',
    formSize: '25mL / Bottle / 1\'s',
    image: 'DIV 1/PEDIA DERMA OB/TRIORT SCALP LOTION 25ML 1024x1024.jpg',
    imageAlt: 'Tricort scalp lotion',
    summary: 'Tricort Scalp Lotion provides targeted treatment for scalp psoriasis, eczema, and other inflammatory scalp conditions.',
    benefits: [
      'Specifically formulated for scalp application.',
      'Reduces scalp inflammation and itching.',
      'Treats scalp psoriasis and seborrheic dermatitis.',
      'Non-greasy formula.',
      'Easy application to affected scalp areas.',
    ],
    directions: [
      'Apply to affected scalp areas twice daily.',
      'Massage gently into affected areas.',
    ],
    availability: 'Available in pharmacies nationwide.',
    tags: ['scalp psoriasis', 'scalp treatment', 'steroid lotion', 'hair care'],
  },
  {
    id: 'trichogen',
    name: 'Trichogen',
    division: 'Dermatology',
    category: 'Hair Loss Treatment',
    genericName: 'Finasteride 0.1% w/w with Scalp Lotion',
    formSize: '30mL / Box / 1\'s',
    image: 'DIV 1/PEDIA DERMA OB/TRICHOGEN SCALP LOTION 30ML 1024x1024.jpg',
    imageAlt: 'Trichogen finasteride scalp lotion',
    summary: 'Trichogen contains Finasteride in a topical formulation for the treatment of male pattern hair loss.',
    benefits: [
      'Treats male pattern hair loss.',
      'Topical application reduces systemic side effects.',
      'Helps promote hair regrowth.',
      'Slows down hair loss progression.',
      'Convenient scalp application.',
    ],
    directions: [
      'Apply to affected scalp areas once daily.',
      'Massage gently until absorbed.',
    ],
    availability: 'Available in dermatology clinics and specialty pharmacies.',
    tags: ['hair loss', 'finasteride', 'male pattern baldness', 'hair regrowth'],
  },
  {
    id: 'napease',
    name: 'Napease',
    division: 'Sleep Health',
    category: 'Natural Sleep Aid',
    genericName: 'Valerian Root + Chamomile',
    formSize: 'Capsule / 30\'s',
    image: 'OTC/napease 1 1024x1024.jpg',
    imageAlt: 'Napease natural sleep aid capsules',
    summary: 'Napease combines Valerian Root and Chamomile to promote natural relaxation and support restful sleep.',
    benefits: [
      'Promotes natural sleep without grogginess.',
      'Reduces sleep latency time.',
      'Calms nervous tension and anxiety.',
      'Natural herbal formulation.',
      'Non-habit forming sleep support.',
    ],
    directions: [
      'Take 1-2 capsules 30 minutes before bedtime.',
      'Use as needed for sleep support.',
    ],
    availability: 'Available in health stores and pharmacies nationwide.',
    tags: ['sleep aid', 'valerian', 'chamomile', 'insomnia', 'relaxation'],
  },
  {
    id: 'canem',
    name: 'Canem',
    division: 'Infectious Diseases',
    category: 'Antibiotic',
    genericName: 'Meropenem 1g',
    formSize: 'Vial / 1\'s',
    image: 'DIV 2/GASTRO IDS IM GP/CANEM 1024x1024.jpg',
    imageAlt: 'Canem meropenem injection',
    summary: 'Canem contains Meropenem, a broad-spectrum carbapenem antibiotic for serious bacterial infections.',
    benefits: [
      'Broad-spectrum antibiotic coverage.',
      'Effective against resistant bacterial strains.',
      'Hospital-grade infection treatment.',
      'Critical care medication.',
      'Life-saving antibiotic therapy.',
    ],
    directions: [
      'For intravenous use only under medical supervision.',
      'Dosage determined by severity of infection and patient factors.',
    ],
    availability: 'Available in hospitals and critical care facilities.',
    tags: ['antibiotic', 'meropenem', 'infection', 'hospital use'],
  },
  {
    id: 'serlev-500mg',
    name: 'Serlev 500mg',
    division: 'Infectious Diseases',
    category: 'Antibiotic',
    genericName: 'Levofloxacin',
    formSize: 'Tablet / 10\'s',
    image: 'DIV 2/GASTRO IDS IM GP/SERLEV 1024x1024.jpg',
    imageAlt: 'Serlev levofloxacin tablets',
    summary: 'Serlev contains Levofloxacin, a fluoroquinolone antibiotic for various bacterial infections.',
    benefits: [
      'Broad-spectrum antibiotic activity.',
      'Treats respiratory, urinary, and skin infections.',
      'Convenient once-daily dosing.',
      'Effective against many common pathogens.',
      'Well-established safety profile.',
    ],
    directions: [
      'Take as prescribed, usually once daily.',
      'Complete full course of treatment.',
    ],
    availability: 'Available in pharmacies nationwide.',
    tags: ['antibiotic', 'levofloxacin', 'infection', 'respiratory infection'],
  },
  {
    id: 'medoflucon-50mg',
    name: 'Medoflucon 50mg',
    division: 'Infectious Diseases',
    category: 'Antifungal',
    genericName: 'Fluconazole',
    formSize: '50mg / Capsule / 7\'s',
    image: 'medoflucon-50mg.webp',
    imageAlt: 'Medoflucon 50mg fluconazole capsules',
    summary: 'Medoflucon 50mg contains Fluconazole for the treatment of fungal infections.',
    benefits: [
      'Effective against various fungal infections.',
      'Treats vaginal candidiasis and other fungal conditions.',
      'Oral convenience for fungal treatment.',
      'Well-tolerated antifungal medication.',
      'Proven clinical effectiveness.',
    ],
    directions: [
      'Take as directed by your physician.',
      'Complete full course as prescribed.',
    ],
    availability: 'Available in pharmacies nationwide.',
    tags: ['antifungal', 'fluconazole', 'yeast infection', 'candidiasis'],
  },
  {
    id: 'medoflucon-150mg',
    name: 'Medoflucon 150mg',
    division: 'Infectious Diseases',
    category: 'Antifungal',
    genericName: 'Fluconazole',
    formSize: '150mg / Capsule / 1\'s',
    image: 'medoflucon-150mg.webp',
    imageAlt: 'Medoflucon 150mg fluconazole capsule',
    summary: 'Medoflucon 150mg provides single-dose treatment for vaginal yeast infections.',
    benefits: [
      'Single-dose convenience.',
      'Effective treatment for vaginal candidiasis.',
      'Rapid relief from symptoms.',
      'Discreet and convenient packaging.',
      'Proven single-dose efficacy.',
    ],
    directions: [
      'Take one capsule as a single dose.',
      'May be taken with or without food.',
    ],
    availability: 'Available in pharmacies nationwide.',
    tags: ['antifungal', 'fluconazole', 'yeast infection', 'single dose'],
  },
  {
    id: 'vancolon-500mg',
    name: 'Vancolon 500mg',
    division: 'Infectious Diseases',
    category: 'Antibiotic',
    genericName: 'Vancomycin Hydrochloride',
    formSize: '500mg / Vial / 1\'s',
    image: 'DIV 2/GASTRO IDS IM GP/VANCOLON 1 1024x1024.jpg',
    imageAlt: 'Vancolon vancomycin injection',
    summary: 'Vancolon contains Vancomycin, a glycopeptide antibiotic for serious Gram-positive bacterial infections.',
    benefits: [
      'Effective against MRSA and other resistant bacteria.',
      'Critical care antibiotic.',
      'Hospital-grade infection control.',
      'Life-saving medication for severe infections.',
      'Trusted Gram-positive coverage.',
    ],
    directions: [
      'For intravenous infusion under medical supervision.',
      'Dosage adjusted based on renal function and drug levels.',
    ],
    availability: 'Available in hospitals and healthcare facilities.',
    tags: ['antibiotic', 'vancomycin', 'mrsa', 'hospital infection'],
  },
  {
    id: 'domplux',
    name: 'Domplux',
    division: 'Gastroenterology',
    category: 'Acid Reducer & Prokinetic',
    genericName: 'Pantoprazole + Domperidone (Modified Release)',
    formSize: 'Capsule / 30\'s',
    image: 'DIV 2/GASTRO IDS IM GP/DOMPLUX 1 1024x1024.jpg',
    imageAlt: 'Domplux pantoprazole and domperidone capsules',
    summary: 'Domplux combines Pantoprazole for acid reduction with Domperidone for gastrointestinal motility in a modified release formulation.',
    benefits: [
      'Reduces gastric acid production.',
      'Improves gastrointestinal motility.',
      'Relieves GERD and acid reflux symptoms.',
      'Helps with nausea and vomiting.',
      'Modified release for sustained effect.',
    ],
    directions: [
      'Take one capsule daily before meals.',
      'Do not crush or chew capsules.',
    ],
    availability: 'Available in pharmacies nationwide.',
    tags: ['gerd', 'acid reflux', 'pantoprazole', 'domperidone', 'digestive health'],
  },
  {
    id: 'aminorol',
    name: 'Aminorol',
    division: 'Nephrology / Hematology / Anticoagulant',
    category: 'Renal Nutrition',
    genericName: 'Ketoanalogues + Essential Amino Acids',
    formSize: 'Tablet / 100\'s',
    image: 'DIV 1/NEHPRO/aminoral 1 1024X1024.jpg',
    imageAlt: 'Aminorol renal nutrition tablets',
    summary: 'Aminorol provides ketoanalogues and essential amino acids for nutritional support in chronic kidney disease patients.',
    benefits: [
      'Supports nutritional needs in CKD patients.',
      'Helps reduce urea production.',
      'Supports protein metabolism in renal impairment.',
      'Essential nutritional support for dialysis patients.',
      'Helps maintain nutritional status in renal disease.',
    ],
    directions: [
      'Take as directed by your nephrologist.',
      'Usually taken with meals.',
    ],
    availability: 'Available in nephrology centers and specialty pharmacies.',
    tags: ['kidney disease', 'renal nutrition', 'amino acids', 'ckd'],
  },
  {
    id: 'porsrose-20mg-ml',
    name: 'Porsrose 20mg/mL',
    division: 'Nephrology / Hematology / Anticoagulant',
    category: 'Iron Supplement',
    genericName: 'Iron Sucrose',
    formSize: 'Solution for Injection (IV) -- 20mg/mL (100mg/5mL)',
    image: 'DIV 1/NEHPRO/PORSROSE 1024x1024.jpg',
    imageAlt: 'Porsrose iron sucrose injection',
    summary: 'Porsrose provides intravenous iron sucrose for the treatment of iron deficiency anemia in patients who cannot tolerate oral iron.',
    benefits: [
      'Rapid iron repletion.',
      'Suitable for patients intolerant to oral iron.',
      'Effective for anemia in chronic kidney disease.',
      'Well-tolerated IV iron formulation.',
      'Raises hemoglobin levels quickly.',
    ],
    directions: [
      'For intravenous administration by healthcare professional.',
      'Dosage determined by degree of iron deficiency.',
    ],
    availability: 'Available in hospitals and dialysis centers.',
    tags: ['iron deficiency', 'anemia', 'iv iron', 'kidney disease'],
  },
  {
    id: 'repoitin-4000-iu',
    name: 'Repoitin 4000 IU',
    division: 'Nephrology / Hematology / Anticoagulant',
    category: 'Erythropoiesis Stimulator',
    genericName: 'Recombinant Human Erythropoietin',
    formSize: '4000 IU / PFS',
    image: 'DIV 1/NEHPRO/repoitin 1 1024x1024.jpg',
    imageAlt: 'Repoitin erythropoietin injection',
    summary: 'Repoitin contains recombinant human erythropoietin to stimulate red blood cell production in anemia associated with chronic kidney disease.',
    benefits: [
      'Stimulates red blood cell production.',
      'Reduces transfusion requirements in CKD patients.',
      'Improves anemia symptoms and quality of life.',
      'Pre-filled syringe for convenient administration.',
      'Established efficacy in renal anemia.',
    ],
    directions: [
      'Administer as directed by healthcare provider.',
      'Dosage adjusted based on hemoglobin response.',
    ],
    availability: 'Available in hospitals and nephrology centers.',
    tags: ['erythropoietin', 'anemia', 'ckd', 'red blood cells'],
  },
  {
    id: 'zenalb-20-50ml',
    name: 'Zenalb 20% 50mL',
    division: 'Nephrology / Hematology / Anticoagulant',
    category: 'Plasma Volume Expander',
    genericName: 'Human Albumin',
    formSize: '50mL / Vial / 1\'s',
    image: 'DIV 2/GASTRO IDS IM GP/ZENALB 1 1024x1024.jpg',
    imageAlt: 'Zenalb human albumin solution',
    summary: 'Zenalb provides human albumin for volume expansion in hypovolemic shock and other conditions requiring plasma volume support.',
    benefits: [
      'Volume expansion in shock states.',
      'Maintains colloid osmotic pressure.',
      'Supports critical care management.',
      'Human-derived albumin product.',
      'Essential hospital medication.',
    ],
    directions: [
      'For intravenous administration under medical supervision.',
      'Dosage based on clinical condition and response.',
    ],
    availability: 'Available in hospitals and critical care facilities.',
    tags: ['albumin', 'volume expander', 'critical care', 'shock'],
  },
  {
    id: 'nuparin-1000iu-ml',
    name: 'Nuparin 1000IU/mL',
    division: 'Nephrology / Hematology / Anticoagulant',
    category: 'Anticoagulant',
    genericName: 'Heparin Sodium',
    formSize: '5mL / 1000 IU / Vial / Pack',
    image: 'DIV 1/NEHPRO/NUPARIN 1000 1024x1024.jpg',
    imageAlt: 'Nuparin heparin sodium injection',
    summary: 'Nuparin provides Heparin Sodium for anticoagulation in various clinical settings including dialysis and thrombosis prevention.',
    benefits: [
      'Prevents blood clot formation.',
      'Used in dialysis and surgical procedures.',
      'Rapid-acting anticoagulant.',
      'Essential for thrombosis prevention.',
      'Hospital and clinical use.',
    ],
    directions: [
      'For subcutaneous or intravenous use under medical supervision.',
      'Dosage monitored by coagulation parameters.',
    ],
    availability: 'Available in hospitals and healthcare facilities.',
    tags: ['heparin', 'anticoagulant', 'blood thinner', 'dialysis'],
  },
  {
    id: 'nuparin-5000iu-ml',
    name: 'Nuparin 5000IU/mL',
    division: 'Nephrology / Hematology / Anticoagulant',
    category: 'Anticoagulant',
    genericName: 'Heparin Sodium',
    formSize: '5mL / 5000 IU / 10 Vials / Pack',
    image: 'DIV 1/NEHPRO/NUPARIN 5000 1024x1024.jpg',
    imageAlt: 'Nuparin high strength heparin injection',
    summary: 'Nuparin 5000IU/mL provides higher concentration Heparin Sodium for situations requiring stronger anticoagulation.',
    benefits: [
      'Higher concentration for specific clinical needs.',
      'Effective anticoagulation in high-risk situations.',
      'Prevents thrombotic complications.',
      'Trusted heparin formulation.',
      'Multiple vial packaging for clinical convenience.',
    ],
    directions: [
      'For medical use under strict supervision.',
      'Dosage carefully calculated based on patient weight and condition.',
    ],
    availability: 'Available in hospitals and specialized clinical settings.',
    tags: ['heparin', 'anticoagulant', 'high strength', 'thrombosis prevention'],
  },
  {
    id: 'folisure-5mg',
    name: 'Folisure 5mg',
    division: 'Obstetrics & Gynecology',
    category: 'Pregnancy Supplement',
    genericName: 'Folic Acid',
    formSize: '5mg / Capsule / 30\'s',
    image: 'DIV 1/PEDIA DERMA OB/FOLISURE 1024x1024.jpg',
    imageAlt: 'Folisure folic acid capsules',
    summary: 'Folisure provides high-dose folic acid supplementation for pregnancy and reproductive health support.',
    benefits: [
      'Prevents neural tube defects in pregnancy.',
      'Supports red blood cell formation.',
      'Essential for fetal development.',
      'Higher dose for specific medical needs.',
      'Supports maternal health during pregnancy.',
    ],
    directions: [
      'Take one capsule daily or as directed by your obstetrician.',
      'Start before conception and continue through early pregnancy.',
    ],
    availability: 'Available in pharmacies and obstetric clinics nationwide.',
    tags: ['folic acid', 'pregnancy', 'neural tube defects', 'prenatal vitamins'],
  },
  {
    id: 'primovit-capsule',
    name: 'Primovit Capsule',
    division: 'Pediatrics & General Nutrition',
    category: 'Multivitamin Supplement',
    genericName: 'Multivitamins',
    formSize: 'Capsule / 30\'s',
    image: 'OTC/primovit capsule 1024x1024.jpg',
    imageAlt: 'Primovit multivitamin capsules',
    summary: 'Primovit Capsules provide comprehensive multivitamin support for overall health and nutritional supplementation.',
    benefits: [
      'Comprehensive vitamin and mineral support.',
      'Supports overall health and wellness.',
      'Fills nutritional gaps in diet.',
      'Boosts energy and vitality.',
      'Supports immune function.',
    ],
    directions: [
      'Take one capsule daily with meals.',
      'Use consistently for optimal nutritional benefits.',
    ],
    availability: 'Available in pharmacies and health stores nationwide.',
    tags: ['multivitamin', 'nutritional support', 'vitamins', 'health supplement'],
  },
  {
    id: 'primovit-grow-syrup',
    name: 'Primovit Grow Syrup',
    division: 'Pediatrics & General Nutrition',
    category: 'Children\'s Nutrition',
    genericName: 'Vitamins A, B, C, D + CGF + Tau Lys + Zinc',
    formSize: 'Syrup / 120mL',
    image: 'OTC/primo grow 1024x1024.jpg',
    imageAlt: 'Primovit childrens growth syrup',
    summary: 'Primovit Grow Syrup provides essential vitamins and nutrients specially formulated for children\'s growth and development.',
    benefits: [
      'Supports children\'s growth and development.',
      'Enhances immune system function.',
      'Provides essential vitamins for healthy development.',
      'Pleasant-tasting syrup for easy administration.',
      'Supports overall pediatric health.',
    ],
    directions: [
      'Take as directed based on child\'s age and weight.',
      'Shake well before use.',
    ],
    availability: 'Available in pharmacies and pediatric clinics nationwide.',
    tags: ['childrens vitamins', 'growth supplement', 'pediatric health', 'immune support'],
  }
];
    const ITEMS_PER_PAGE = 8;
    const $ = id => document.getElementById(id);
    const search = $('productSearch');
    if (!search) return;
    const divisionFilter = $('divisionFilter'),
        categoryFilter = $('categoryFilter'),
        results = $('productResults'),
        summaryEl = $('catalogSummary'),
        empty = $('catalogEmpty'),
        prev = $('prevPage'),
        next = $('nextPage'),
        pages = $('paginationPages');
    const modal = $('productModal'),
        modalImg = $('productModalImage'),
        modalTitle = $('productModalTitle'),
        modalTags = $('productModalTags'),
        modalSummary = $('productModalSummary'),
        modalBenefits = $('productModalBenefits'),
        modalDirections = $('productModalDirections'),
        modalAvailability = $('productModalAvailability'),
        modalClose = $('productModalClose');
    let filtered = [...PRODUCTS].sort(sortByName),
        page = 1,
        lastFocus = null;
    initFilters();
    attach();
    render();

    function initFilters() {
        const divisions = [...new Set(PRODUCTS.map(p => p.division))].sort();
        divisions.forEach(d => {
            const opt = document.createElement('option');
            opt.value = d;
            opt.textContent = d;
            divisionFilter.appendChild(opt);
        });
        const categories = [...new Set(PRODUCTS.map(p => p.category))].sort();
        categories.forEach(c => {
            const opt = document.createElement('option');
            opt.value = c;
            opt.textContent = c;
            categoryFilter.appendChild(opt);
        });
    }

    function attach() {
        search.addEventListener('input', debounce(() => {
            page = 1;
            filter();
        }, 200));
        divisionFilter.addEventListener('change', () => {
            page = 1;
            filter();
        });
        categoryFilter.addEventListener('change', () => {
            page = 1;
            filter();
        });
        prev.addEventListener('click', () => {
            if (page > 1) {
                page--;
                render();
            }
        });
        next.addEventListener('click', () => {
            const total = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
            if (page < total) {
                page++;
                render();
            }
        });
        modalClose.addEventListener('click', closeModal);
        modal.addEventListener('click', e => {
            if (e.target && e.target.hasAttribute('data-modal-close')) closeModal();
        });
    }

    function filter() {
        const query = search.value.trim().toLowerCase();
        const division = divisionFilter.value;
        const category = categoryFilter.value;
        filtered = PRODUCTS.filter(p => {
            const matchDivision = division === 'all' || p.division === division;
            const matchCategory = category === 'all' || p.category === category;
            const haystack = (p.name + ' ' + p.summary + ' ' + p.division + ' ' + p.category + ' ' + (p.tags || []).join(' ')).toLowerCase();
            const matchQuery = !query || haystack.includes(query);
            return matchDivision && matchCategory && matchQuery;
        }).sort(sortByName);
        render();
    }

    function render() {
        results.innerHTML = '';
        pages.innerHTML = '';
        const total = filtered.length;
        const totalPages = Math.max(1, Math.ceil(total / ITEMS_PER_PAGE));
        if (page > totalPages) page = totalPages;
        const start = (page - 1) * ITEMS_PER_PAGE;
        const items = filtered.slice(start, start + ITEMS_PER_PAGE);
        if (total === 0) {
            empty.hidden = false;
            summaryEl.textContent = 'No products to display.';
        } else {
            empty.hidden = true;
            summaryEl.textContent = `Showing ${start+1}–${start+items.length} of ${total} products`;
            items.forEach(product => results.appendChild(createCard(product)));
        }
        for (let i = 1; i <= totalPages; i++) {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'pagination-page' + (i === page ? ' is-active' : '');
            btn.textContent = i;
            btn.disabled = i === page;
            btn.addEventListener('click', () => {
                page = i;
                render();
            });
            pages.appendChild(btn);
        }
        prev.disabled = page === 1;
        next.disabled = page === totalPages;
    }

    function createCard(product) {
        const card = document.createElement('article');
        card.className = 'product-card';
        const media = document.createElement('figure');
        media.className = 'product-card__media';
        const img = document.createElement('img');
        const imageName = encodeURI(product.image);
        img.src = `images/products/${imageName}`;
        img.alt = product.imageAlt || product.name;
        img.loading = 'lazy';
        media.appendChild(img);
        const content = document.createElement('div');
        content.className = 'product-card__content';
        const meta = document.createElement('span');
        meta.className = 'product-card__meta';
        meta.textContent = `${product.division} • ${product.category}`;
        const title = document.createElement('h3');
        title.textContent = product.name;
        const summary = document.createElement('p');
        summary.className = 'product-card__summary';
        summary.textContent = product.summary;
        const action = document.createElement('button');
        action.type = 'button';
        action.className = 'product-card__action';
        action.textContent = 'View details';
        action.addEventListener('click', () => openModal(product, action));
        content.append(meta, title, summary, action);
        card.append(media, content);
        return card;
    }

    function openModal(product, trigger) {
        lastFocus = trigger || document.activeElement;
        const imageName = encodeURI(product.image);
        modalImg.src = `images/products/${imageName}`;
        modalImg.alt = product.imageAlt || product.name;
        modalTitle.textContent = product.name;
        modalTags.textContent = `${product.division} • ${product.category}`;
        modalSummary.textContent = product.summary;
        fillList(modalBenefits, product.benefits);
        fillList(modalDirections, product.directions);
        modalAvailability.textContent = product.availability;
        modal.classList.add('is-visible');
        modal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');
        modalClose.focus();
        document.addEventListener('keydown', handleKeydown);
    }

    function closeModal() {
        modal.classList.remove('is-visible');
        modal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');
        document.removeEventListener('keydown', handleKeydown);
        if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus();
    }

    function handleKeydown(e) {
        if (e.key === 'Escape') closeModal();
    }

    function fillList(container, items) {
        container.innerHTML = '';
        (items || []).forEach(text => {
            const li = document.createElement('li');
            li.textContent = text;
            container.appendChild(li);
        });
    }

    function sortByName(a, b) {
        return a.name.localeCompare(b.name);
    }

    function debounce(fn, delay) {
        let t;
        return (...args) => {
            clearTimeout(t);
            t = setTimeout(() => fn.apply(null, args), delay);
        };
    }
})();
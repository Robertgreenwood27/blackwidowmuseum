# Genus — research dossier

Researched 23 November 2026. Scope: BWM-06, `content/museum/genus/`; five existing cases, all thirteen proposed subjects, a complete catalog-based species roster, and one further case. Existing ids are preserved; new ids, titles, kickers and summaries are suggestions. This is a single-file research hand-off; neither exhibit YAML nor the source registry is edited.

## Reading this dossier

- Bracketed citation keys resolve to the 216 entries checked in `content/sources.yaml` or the NEW entries in SOURCES below. The format follows `research/senses-dossier.md`, with the editorial and numerical conventions of `research/web-dossier.md`. Sources were checked through accessible original text, publisher abstracts, indexed primary-text passages, museum accounts and catalog records; access limits are recorded below.
- **established** = secure as qualified; **supported** = a particular sample, experiment or inference; **debated** = unresolved interpretation, classification or mechanism. A label describes its sentence, not every widow species.
- Every observation identifies a species or an explicitly comparative group. Historical names remain attached to their studies; they are not silently translated into modern identifications. “Black widow,” “button spider,” “karakurt” and “viúva-negra” can each cover multiple species.
- FIGURES are candidate fact cards, not illustrations. Body length excludes legs; leg length, leg span and body mass are different quantities. Specimen measurements, population ranges, maxima, model outputs and husbandry settings are distinguished. Fewer independent observations are preferable to invented precision.
- **Two taxonomic snapshots must coexist.** The checked [WSC species list](https://wsc.nmbe.ch/species-list/3681/Latrodectus) has **35 accepted species**. The [14 November 2026 atlas](https://doi.org/10.1093/zoolinnean/zlag145) recognizes **39 named valid species**, plus an undescribed lineage. Its changes are not incorporated into the checked WSC list. The requested roster therefore uses WSC membership, spelling and authorities; the atlas's alternative treatments are explicitly identified. [wsc2026; miller2026]
- WSC distribution strings record occurrence and sometimes distinguish introductions; they do **not** certify native status for every country. The roster preserves that uncertainty, especially for oceanic islands and old transported populations. “Native distribution” must not be inferred merely from a type locality.
- Names follow WSC: *L. hasselti*, *L. karrooensis*, *L. katipo* Powell, **1871**, and *L. occidentalis* Valdez-Mondragón, 2023. Some papers use *hasseltii*, *karooensis* or different katipō dates. Retain original spellings in bibliographic titles. [wsc2026]
- “Late 2026” here means the evidence checked on **23 November**, not a prediction through December. Search-index versions occasionally differ; the reconciliation notes are part of the hand-off.

### Priority qualifications for the current exhibits

1. Keep the 35-species card dated and attributed to WSC; do not present it as unanimous current taxonomy. [wsc2026; miller2026]
2. The hourglass is a useful field character, not the genus diagnosis or an infallible species key. [lotz1994; kaston1970]
3. Brown-widow predation experiments in Florida concern *L. mactans*; they do not establish identical outcomes against *L. hesperus*, *L. katipo* or all African widows. [coticchio2023]
4. Katipō is **At Risk—Declining** in the checked New Zealand assessment; this is not an IUCN Endangered category. [sirvid2021]
5. Laboratory hybrids establish incomplete reproductive isolation; they do not measure the prevalence of hybridisation in nature. [uludag2026]
6. The atlas's stem-origin narrative and crown-clade date differ; use the explicitly identified Table 8 dates below. [miller2026]

## 1. genus.the-widows — The Widows

**Suggested kicker:** One genus, many ways to be a widow.

**Suggested summary:** *Latrodectus* belongs to the comb-footed spider family Theridiidae. Its species share an anatomical toolkit, while colour, body size, habitat and reproductive behaviour vary substantially. [wsc2026; lotz1994; baruffaldi2024]

**Taxa studied:** LATRODECTUS: African revision; three North American black widows; redback comparison; molecular sampling across the genus. OTHER THERIDIIDS: family-level anatomical comparisons. [lotz1994; kaston1970; australianmuseum2026; garb2004; jocque2006]

### FIGURES

| Value | Unit | Short label | Qualifier / locator | Sources |
|---|---|---|---|---|
| 35 | accepted species | The catalog snapshot | WSC genus list checked 23 November 2026; roster in section 19 | [wsc2026] |
| 1805 | year | The genus named | Walckenaer; original generic account p. 81, recorded by WSC | [wsc2026] |
| ≈7.25–20 / ≈2.5–6.5 | mm body length | Females / males in an African revision | Lotz p. 7; regional descriptive ranges, not all-species limits | [lotz1994] |
| 10 / 3–4 | mm body length | A redback comparison | Female / male sizes in Australian Museum account; not a mass ratio | [australianmuseum2026] |
| IV | leg pair | The comb-foot | Serrated tarsal setae; shared theridiid equipment rather than a unique widow character | [lotz1994; jocque2006] |

### OBSERVATIONS

- *Latrodectus* is an accepted genus of Theridiidae. **established** [wsc2026]
- Lotz diagnoses the genus using a large colulus, toothless chelicerae, separated lateral eyes and characteristic genitalia. **established — character combination** [lotz1994]
- Female abdomens are usually globose, whereas males are more elongate. **established — regional revision** [lotz1994]
- Female internal genitalia have paired receptacles connected to coiled copulatory ducts. **established** [lotz1994]
- Male palps include a long coiled embolus used in sperm transfer. **established** [lotz1994]
- Female-biased size dimorphism varies between species. **supported — comparative morphology** [kaston1970; australianmuseum2026]
- In Kaston's series, northern-widow males were larger than southern-widow males. **supported — sampled L. variolus and L. mactans** [kaston1970]
- The 2004 mitochondrial phylogeny recovered two major sampled widow clades. **supported — COI genealogy** [garb2004]
- Comparative mating trials found different courtship and mating outcomes among five widow species. **supported — common laboratory conditions** [baruffaldi2024]

### TERMS

- **Colulus:** a small appendage anterior to the spinnerets, used in theridiid diagnosis. [jocque2006; lotz1994]
- **Sexual size dimorphism:** a difference in size between the sexes; specify length or mass. [kaston1970]
- **Embolus:** the sperm-conducting part of the male palp. [lotz1994]

### Claims to avoid

- “Every widow is black with a red hourglass,” “every female eats her mate,” or a universal female:male size ratio. [lotz1994; baruffaldi2024]
- The African descriptive range excludes some large northern-widow males; it is not a genus maximum. [kaston1970]
- A comb on leg IV identifies a broader family feature, not *Latrodectus* by itself. [jocque2006]
- Keep detailed ancestry in `genus.family-tree` and the full checklist in `genus.species-roster`.

## 2. genus.brown-widow — The Brown Widow

**Suggested kicker:** A travelling widow with a spiked nursery.

**Suggested summary:** *L. geometricus* has spread far beyond its African range and often occupies human structures. Its egg sacs, dispersal behaviour and interactions with native widows provide unusually detailed evidence about invasion biology. [wsc2026; sadir2021; mowery2022; coticchio2023]

**Taxa studied:** *L. geometricus* in southern California, Florida, Israel and Japan; *L. mactans* in Florida competition experiments; *L. pallidus* in Israeli parasitoid comparisons. [danielsen2014; vetter2016; coticchio2023; mowery2022; katahira2026; arabesky2025]

### FIGURES

| Value | Unit | Short label | Qualifier / locator | Sources |
|---|---|---|---|---|
| ≈10 | mm female body length | A small adult widow | UC identification account; approximate mature-female size | [vetter2017] |
| 1935 / 2003 | first-record years | Florida / California | Records summarized in North American distribution study; arrival may predate detection | [sadir2021] |
| 129.0 ± 51.0 | eggs per sac | A field clutch sample | 214 southern Californian sacs, June–October 2012; mean ± SD | [danielsen2014] |
| 30 | degrees | A preferred refuge angle | Laboratory choice against 60° and 90° refuges; not a habitat requirement | [vetter2016] |
| 14.3 / 1.8 | % spiderlings ballooning | Day / night dispersal | Israel field assays; n=147 / 171 respectively | [mowery2022] |
| 6.6 | reported relative likelihood | Predation on southern widows | Coticchio Table 3 comparison with other cobweb spiders; not a field extinction rate | [coticchio2023] |
| 99 | spiders sequenced | Testing invasion lineages | Tokyo/Kanagawa; 3 males, 96 females; mitochondrial cox1 and 16S | [katahira2026] |

### OBSERVATIONS

- WSC treats Africa as the brown widow's native region and lists numerous introductions elsewhere. **established — catalog treatment** [wsc2026]
- Mature females can be tan, brown or very dark. **established — identification account** [vetter2017]
- The underside usually carries an orange-toned hourglass. **established — variable field character** [vetter2017]
- The rounded egg sacs have conspicuous silk projections. **established** [vetter2017]
- Females preferred deeper and corrugated refuges in laboratory choices. **supported** [vetter2016]
- Florida brown widows grew and matured faster than southern black widows in the experimental comparison. **supported** [coticchio2023]
- Brown widows attacked and consumed southern black widows in cohabitation trials. **supported — L. mactans comparator** [coticchio2023]
- Field-tested spiderlings dispersed both by rappelling and by ballooning. **supported — Israel** [mowery2022]
- A Japanese sample contained two major mitochondrial lineages. **supported** [katahira2026]
- Both lineages occurred together in Sagamihara, consistent with repeated introductions or substantial propagule input. **supported — interpretation** [katahira2026]
- Removing egg-sac projections increased parasitoid access in an experiment. **supported — Israel** [arabesky2025]
- Female defence and sac structure both contributed to nursery protection. **supported — parasitoid comparison** [arabesky2025]

### TERMS

- **Synanthropic:** associated with human environments. [sadir2021]
- **Intraguild predation:** one predator consumes another with overlapping resources. [coticchio2023]
- **Propagule pressure:** the number and frequency of arriving colonists. [katahira2026]

### Claims to avoid

- Aggression toward another spider is not aggression toward humans. [coticchio2023]
- Do not turn laboratory predation into proof of continent-wide black-widow extinction or exclusive competition for food. [coticchio2023; sadir2021]
- Spiked sacs are highly useful in North American identification, but surface ornamentation is not unique to this species worldwide; see South America. [miller2026b]
- Neither low global COI variation nor shared haplotypes identifies every shipping route. [garb2004; katahira2026]

## 3. genus.redback — The Redback

**Suggested kicker:** A red stripe, a small male, a remarkable mating system.

**Suggested summary:** Australia's redback, *L. hasselti*, is one of the best-studied widows. Its distinctive mating behaviour and establishment overseas show how closely related species can differ in both ecology and reproduction. [australianmuseum2026; andrade1996; vink2011]

**Taxa studied:** Australian *L. hasselti*; invasive Japanese and New Zealand populations; *L. katipo* in crossing experiments. [andrade1996; mowery2022b; twidle2026; uludag2026]

### FIGURES

| Value | Unit | Short label | Qualifier / locator | Sources |
|---|---|---|---|---|
| ≈10 / 3–4 | mm body length | Female / male | Australian Museum account; legs excluded | [australianmuseum2026] |
| 11/17 | observed matings | Males consumed during copulation | Perth field observations, January 1994; 65% in this small sample | [andrade1996] |
| 25 / 11 | min median copulation | Cannibalized / surviving second males | Separate nonvirgin-female mating experiment; n=5 / 12, Science p. 70 | [andrade1996] |
| 15 | °C | A cold-development comparison | Native Australian eggs developed more slowly and hatched less successfully than Japanese eggs at this test temperature | [mowery2022b] |
| 42 / 5 | males captured | Synthetic lure / control | Polyisoprene dispensers, second two-week vineyard trial, Cromwell 2025; Fig. 6 | [twidle2026] |

### OBSERVATIONS

- Adult female redbacks characteristically have a dorsal red stripe and a ventral red marking. **established — identification account** [australianmuseum2026]
- Redbacks commonly occupy disturbed and urban habitats in Australia. **established — museum account** [australianmuseum2026]
- Copulating males somersault to bring their abdomen toward the female's mouthparts. **established — L. hasselti** [andrade1996]
- Cannibalized males gained paternity advantages in Andrade's experiments. **supported** [andrade1996]
- Young redbacks climb toward light before dispersal. **supported — natural-history observations** [forster1995]
- Established populations were recorded in New Zealand in the early 1980s and Osaka in 1995. **established — published invasion history** [vink2011]
- Japanese and Australian populations differed in cold developmental performance under controlled conditions. **supported** [mowery2022b]
- A four-compound synthetic blend attracted males in New Zealand vineyard trials. **supported** [twidle2026]
- Redback males produced hybrids with katipō females in laboratory crosses. **supported** [uludag2026]
- The hybrid experiment separated somersaulting from abdominal constriction as inherited phenotypes. **supported** [uludag2026]

### TERMS

- **Copulatory cannibalism:** consumption occurring during mating. [andrade1996]
- **Paternity:** the proportion of offspring fathered by a male. [andrade1996]
- **Naturalised:** maintaining a reproducing population following introduction. [vink2011]

### Claims to avoid

- “Every redback male dies,” “all widow males somersault,” or treating 11/17 as a universal cannibalism rate. [andrade1996; baruffaldi2024]
- A dorsal stripe alone separates neither redbacks from katipō nor every Asian widow. [vink2008; kananbala2012]
- Do not call all Southeast Asian catalog records native Australian redbacks without acknowledging current taxonomic uncertainty; see naming and roster notes. [wsc2026; miller2026]
- The 2026 pheromone article prints an erroneous 1970 authority date in its Introduction; WSC gives Thorell, **1870**. [twidle2026; wsc2026]

## 4. genus.northern — The Northern Widow

**Suggested kicker:** A broken hourglass and a changing map.

**Suggested summary:** *L. variolus* is a distinct North American widow, with comparatively large males and a commonly divided ventral marking. Museum specimens and modern observations allow its northern range to be investigated rather than guessed from the common name. [kaston1970; hiskes2013; wang2018]

**Taxa studied:** *L. variolus* morphology and rearing; distribution modelling in eastern North America. OTHER SPIDER: *Sphodros niger* was a separate modelling subject, not a widow. [kaston1970; wang2018]

### FIGURES

| Value | Unit | Short label | Qualifier / locator | Sources |
|---|---|---|---|---|
| 7.4–13 | mm female body length | Measured females | n=32; Kaston p. 45 | [kaston1970] |
| 4.5–8.3 | mm male body length | Measured males | n=34; same series, not a genus-wide male range | [kaston1970] |
| 94 | km | Difference in northernmost records | 1990–2016 versus 1960–1989 records; Québec versus Ontario, Wang Discussion | [wang2018] |
| ≈50 | km | Additional modelled northern suitability | Beyond the recent recorded limit; prediction, not an observed established population | [wang2018] |
| 0/18 | inseminations / attempts | A historical crossing test | *L. variolus* × *L. hesperus* trials; Kaston p. 56 | [kaston1970] |

### OBSERVATIONS

- WSC records *L. variolus* from Canada and the United States. **established** [wsc2026]
- Females commonly have separated red-orange ventral patches rather than a continuous hourglass. **established — variable identification character** [hiskes2013]
- Females can retain a dorsal row of red-orange marks. **established — identification account** [hiskes2013]
- Kaston's male sample overlapped the female size range at its extremes. **supported — lengths, not masses** [kaston1970]
- Northern-widow sacs were typically pear-shaped and grey-toned in the comparative study. **supported** [kaston1970]
- The range study combined museum specimens and citizen-science occurrence records. **established — study design** [wang2018]
- Recent northernmost records lay north of those in the earlier interval. **supported — sampled records** [wang2018]
- The authors considered warming a plausible contributor to northern occurrence changes. **supported — explanation, not experimental causation** [wang2018]
- No insemination resulted from Kaston's northern-by-western trials. **supported — limited laboratory crosses** [kaston1970]

### TERMS

- **Occurrence record:** evidence at a location and date, not necessarily a breeding population. [wang2018]
- **Climatic niche model:** a prediction of suitable conditions from occurrence and environmental data. [wang2018]
- **Pyriform:** pear-shaped. [kaston1970]

### Claims to avoid

- “Northern” does not mean absent from the southeastern United States. [hiskes2013; wsc2026]
- Do not interpret the 94-km record difference as measured annual migration speed or attribute every new record to climate change. [wang2018]
- The 50-km projection is not a verified present-day range boundary. [wang2018]
- A split hourglass alone is not a definitive identification. [kaston1970]

## 5. genus.western — The Western Widow

**Suggested kicker:** A native widow in deserts, dunes and cities.

**Suggested summary:** *L. hesperus* ranges across western North America and has become a major research organism for silk, communication and urban ecology. Its name also covers a species complex whose internal boundaries remain under investigation. [wsc2026; johnson2019; valdezmondragon2023]

**Taxa studied:** *L. hesperus* from North American rearing series, Phoenix/Sonoran habitats and Canadian mate-search studies; Mexican widow lineages in molecular taxonomy. [kaston1970; johnson2019; kasumovic2004; valdezmondragon2023]

### FIGURES

| Value | Unit | Short label | Qualifier / locator | Sources |
|---|---|---|---|---|
| 8–15.5 | mm female body length | Measured females | n=59, Kaston p. 45 | [kaston1970] |
| 3–6.5 | mm male body length | Measured males | n=63, same series | [kaston1970] |
| 33 / 27 | °C | Urban / desert refuges | Phoenix July microclimates used to define rearing treatments | [johnson2019] |
| 36 | family lineages | Testing urban heat | Sibling comparisons; not 36 populations | [johnson2019] |
| 14 | assembled chromosomes | A genomic resource | Western-widow reference assembly; assembled representation, not diploid cell count | [miles2024] |

### OBSERVATIONS

- WSC records native-range occurrence in Canada, the United States and Mexico. **established — catalog geography** [wsc2026]
- WSC separately lists introductions to Israel and Korea. **established — catalog treatment** [wsc2026]
- Immatures are patterned and become darker over successive instars. **established — developmental series** [kaston1970]
- Egg sacs are commonly tan and pear-shaped. **supported — comparative rearing** [kaston1970]
- Sampled Phoenix refuges were warmer than desert refuges in July. **supported** [johnson2019]
- Experimental urban heat slowed development and increased early mortality. **supported** [johnson2019]
- Late juvenile males increased feeding voracity while females reduced web building under the hot treatment. **supported** [johnson2019]
- Mate-searching males responded to airborne cues from unoccupied female webs. **supported — field experiment** [kasumovic2004]
- Male responses differed among female populations and species. **supported — chemical behaviour, not a taxonomic decision alone** [kasumovic2004]
- Mexican COI, ITS2 and morphological evidence revealed unresolved structure within the *hesperus* complex. **supported** [valdezmondragon2023]

### TERMS

- **Urban heat island:** locally elevated temperatures associated with urban development. [johnson2019]
- **Species complex:** closely related populations whose species limits require further resolution. [valdezmondragon2023]
- **Reference genome:** an assembled sequence resource for subsequent comparisons. [miles2024]

### Claims to avoid

- Do not equate “western widow” with the Mexican *L. occidentalis*. [valdezmondragon2023]
- The 33°C treatment is not a preferred temperature or lethal threshold. [johnson2019]
- Regional DNA clusters and pheromone discrimination do not independently prove a particular number of new species. [valdezmondragon2023; kasumovic2004]
- Reserve detailed silk mechanics and sensory mechanisms for their existing vaults.

## 6. genus.southern — The Southern Black Widow

**Suggested kicker:** The familiar name belongs to a particular species.

**Suggested summary:** *L. mactans* is the southern black widow of North America, not a blanket name for all black widows worldwide. Its identification, reproduction and interactions with the invasive brown widow can be described with species-specific evidence. [wsc2026; kaston1970; breene1985; coticchio2023]

**Taxa studied:** North American *L. mactans*; Florida brown-widow comparisons; southern-widow male mating experiments. [kaston1970; eiden2013; breene1985; coticchio2023]

### FIGURES

| Value | Unit | Short label | Qualifier / locator | Sources |
|---|---|---|---|---|
| 5–13.5 | mm female body length | Measured females | n=52; Kaston p. 45 | [kaston1970] |
| 2.9–5.1 | mm male body length | Measured males | n=37; same series | [kaston1970] |
| ≈11–12 | mm egg-sac diameter | A rounded nursery | Kaston p. 56; approximately spherical sacs with apical nipple | [kaston1970] |
| ≈220 | eggs per sac | An extension-account estimate | UF species account's compiled typical value; not Kaston's measured mean | [eiden2013] |
| 1775 | year | The species named | Originally *Aranea mactans* Fabricius; authority parentheses retained | [wsc2026] |

### OBSERVATIONS

- WSC describes *L. mactans* as probably native only to North America. **established — qualified catalog treatment** [wsc2026]
- The southeastern United States is central to its documented American range. **established — species account** [eiden2013]
- Adult females commonly have a continuous red ventral hourglass. **established — variable field character** [eiden2013]
- Kaston's southern widows were smaller on average than his western widows. **supported — comparative series** [kaston1970]
- Their egg sacs were generally more spherical than western- and northern-widow sacs. **supported** [kaston1970]
- Males inseminated multiple females in Breene and Sweet's experiments. **supported** [breene1985]
- Laboratory inseminations between southern and western widows did not yield developing eggs in Kaston's trials. **supported** [kaston1970]
- Florida brown widows killed southern black widows in controlled encounters. **supported** [coticchio2023]
- The authors proposed predation as a contributor to local disappearance from urban structures. **supported — causal interpretation** [coticchio2023]

### TERMS

- **Sensu lato:** in a broad historical sense; older “*mactans*” can include species now separated. [levi1959; wsc2026]
- **Insemination:** sperm transfer, distinct from successful fertilisation and offspring production. [kaston1970]
- **Multiple mating:** mating with more than one partner; distinguish male and female behaviour. [breene1985]

### Claims to avoid

- Reassigning old Brazilian, Israeli or African “*L. mactans*” experiments without specimen evidence. [wsc2026]
- “The male is always eaten after mating” is contradicted by repeated insemination. [breene1985]
- Do not label an unhatched sac “sterile hybrid offspring”; an egg sac is not proof of fertilisation. [kaston1970]
- Do not compare genus-wide venom potency or clinical outcomes using these morphological figures.

## 7. genus.mediterranean — Two Iberian Widows

**Suggested kicker:** Thirteen spots do not tell the whole story.

**Suggested summary:** The Mediterranean widow *L. tredecimguttatus* extends far into Eurasia, while *L. lilianae* is a separately accepted Spanish species. Their body hairs, reproductive anatomy and ecology provide stronger evidence than spot-count folklore. [wsc2026; melic2000; nentwig2026b]

**Taxa studied:** *L. tredecimguttatus* in taxonomic identification accounts; Spanish *L. lilianae* in its description and a four-year feeding study. [melic2000; nentwig2026b; hodar2002]

### FIGURES

| Value | Unit | Short label | Qualifier / locator | Sources |
|---|---|---|---|---|
| 7–15 / 4–7 | mm body length | Mediterranean female / male | Spiders of Europe account; descriptive ranges | [nentwig2026b] |
| 12.5–16.0 | mm female body length | The Iberian species | *L. lilianae* original description, p. 22 | [melic2000] |
| 4 | duct loops | An internal comparison | *L. lilianae* female; configuration matters as well as count | [melic2000] |
| 2,106 / 164 | prey items / webs | A four-year diet sample | *L. lilianae*, arid southeastern Spain, 1990–1993 | [hodar2002] |
| 65.4–82.0 | % prey items | Beetles and woodlice | Tenebrionidae + Oniscidae, variation within the Spanish study; biomass contribution 78.6–92.0% | [hodar2002] |

### OBSERVATIONS

- *L. tredecimguttatus* is the type species of *Latrodectus*. **established** [wsc2026]
- Its catalog range reaches from the Mediterranean through Central Asia to China. **established — occurrence summary** [wsc2026]
- Mediterranean females can be entirely black without visible dorsal red spots. **established — identification account** [nentwig2026b]
- Their abdominal covering includes short bifid hairs as well as longer hairs. **established** [nentwig2026b]
- Melic distinguished *L. lilianae* using morphology including the genital ducts and abdominal setation. **established — original diagnosis** [melic2000]
- WSC currently lists *L. lilianae* from Spain. **established — deliberately narrower than “all Iberia”** [wsc2026]
- The feeding study sampled *L. lilianae* in arid shrub-steppe. **established — study locality** [hodar2002]
- Beetles and woodlice dominated that population's recorded prey. **supported** [hodar2002]
- Five small lizards also occurred among its prey remains. **supported — rare records, not dietary dependence** [hodar2002]
- Prey-size selection complicated a simple taxonomic-specialisation interpretation. **supported — study analysis** [hodar2002]

### TERMS

- **Bifid seta:** a hair with a divided tip. [nentwig2026b]
- **Type species:** the nominal species anchoring a genus name. [wsc2026]
- **Prey mummy:** a retained prey remnant used to reconstruct diet. [hodar2002]

### Claims to avoid

- An invariant total of thirteen spots, a compulsory hourglass, or identifying all Iberian widows as *L. tredecimguttatus*. [melic2000; nentwig2026b]
- Do not expand *L. lilianae* to Portugal or North Africa without an individually verified record; the checked WSC says Spain. [wsc2026]
- The diet percentages belong to *L. lilianae*, not its Mediterranean congener. [hodar2002]
- The paper's online-platform date is 2006, but its issue and correct citation year are **2002**. [hodar2002]

## 8. genus.katipo — A Widow of the Dunes

**Suggested kicker:** Protect the beach habitat, protect the spider.

**Suggested summary:** New Zealand's katipō, *L. katipo*, is a dune specialist with a documented conservation problem. Habitat change, recolonisation by introduced spiders and potential hybridisation require different kinds of evidence rather than a single invasion story. [patrick2002; hann1990; sirvid2021; uludag2026]

**Taxa studied:** New Zealand *L. katipo*, including the northern dark form formerly called *L. atritus*; OTHER THERIDIID *Steatoda capensis*; Australian redback in laboratory crosses. [vink2008; hann1990; uludag2026]

### FIGURES

| Value | Unit | Short label | Qualifier / locator | Sources |
|---|---|---|---|---|
| At Risk—Declining | NZ threat category | A national assessment | 2020 assessment, published 2021, p. 19; B(2), qualifiers CI, DPT, RR; not an IUCN category | [sirvid2021] |
| 26 / 90 | populations / dune systems surveyed | A historical survey | Patrick's national survey; 127 potential sites visited overall | [patrick2002] |
| 46 | % formerly recorded sites | Found again | Survey detection at historical localities; not 54% proven local extinctions | [patrick2002] |
| 19 | sites | Conservation priorities | Key sites proposed in the 2002 report, not all surviving populations in 2026 | [patrick2002] |
| 104 | backcross males | A modern hybrid experiment | *katipo* × *hasselti* descendants; 55 redback backcrosses and 49 katipō backcrosses | [uludag2026] |

### OBSERVATIONS

- Katipō is endemic to New Zealand. **established** [wsc2026; vink2008]
- Its coastal habitat includes sparse dune vegetation and driftwood refuges. **established — survey evidence** [patrick2002]
- Dune habitat loss and degradation were major threats identified by the national survey. **supported** [patrick2002]
- Northern dark and southern red-striped forms were united as one species using morphological, genetic and crossing evidence. **supported — taxonomic synthesis** [vink2008]
- WSC treats *L. atritus* as a synonym of *L. katipo*. **established — catalog treatment** [wsc2026]
- Hann found substantial food and space overlap with introduced *S. capensis*. **supported — studied populations** [hann1990]
- Adult katipō were not inferior predators in the laboratory encounters. **supported** [hann1990]
- Greater reproductive output could let *S. capensis* occupy habitat after katipō population crashes. **supported — proposed mechanism** [hann1990]
- Katipō females crossed with redback males produced hybrid descendants in the 2026 experiment. **supported — laboratory** [uludag2026]
- Fertile hybrid females could be backcrossed to males of either parental species. **supported — laboratory** [uludag2026]
- The checked national assessment places katipō in At Risk—Declining. **established — dated assessment** [sirvid2021]

### TERMS

- **Endemic:** naturally restricted to a particular region. [vink2008]
- **Recolonisation:** reoccupation after a local population has declined or disappeared. [hann1990]
- **Backcross:** crossing a hybrid with a parental species. [uludag2026]

### Claims to avoid

- “*Steatoda* directly kills and outcompetes katipō everywhere” goes beyond Hann's proposed post-crash replacement mechanism. [hann1990]
- Do not count *L. atritus* as an extra accepted species. [wsc2026]
- Do not present an old survey's nondetection as confirmed extinction or the 26 populations as a current national census. [patrick2002]
- No population-wide rate of wild redback–katipō hybridisation is established here. [uludag2026]
- National threat classification and legal protection are different statuses; legal details are outside this case's verified numerical cards.

## 9. genus.african-buttons — The Button Spiders

**Suggested kicker:** African widows are several species, not one black button.

**Suggested summary:** African *Latrodectus* diversity includes dark, pale and brown species with different habitats and reproductive structures. Egg sacs helped reveal overlooked diversity, including the forest-dwelling *L. umbukwane*. [lotz1994; mackay1973; wright2019]

**Taxa studied:** *L. indistinctus*, *L. renivulvatus*, *L. cinctus*, *L. karrooensis*, *L. rhodesiensis*, *L. geometricus*, *L. pallidus*, *L. tredecimguttatus* in the African revision; South African *L. umbukwane*. [lotz1994; wright2019]

### FIGURES

| Value | Unit | Short label | Qualifier / locator | Sources |
|---|---|---|---|---|
| 10–18 / 5–9 | mm sac diameter | Smooth / tufted nurseries | *L. rhodesiensis* / *L. geometricus* from Rhodesian material; Mackay egg-sac section | [mackay1973] |
| ≈27 × 17 | mm egg-sac dimensions | A purple nursery | *L. umbukwane* described sac length × width; not egg-mass dimensions | [wright2019] |
| 698 / 4,963 | km² | Modelled AOO / EOO | *L. umbukwane*, habitat-based estimates in 2019; not measured occupied ground | [wright2019] |
| 3 / 4 | loops | Female ducts / male embolus | *L. umbukwane* diagnosis; do not generalise to every African widow | [wright2019] |
| 1994 / 2019 | revision / description years | Diversity recognised | Lotz's revision / description of *L. umbukwane* | [lotz1994; wright2019] |

### OBSERVATIONS

- *L. indistinctus* is catalogued from Namibia and South Africa. **established** [wsc2026]
- *L. cinctus* has a much broader catalogued African-to-western-Asian distribution. **established — occurrence, not a single uniform population** [wsc2026]
- Lotz distinguished *L. karrooensis* using its T-shaped marking and retreat construction. **supported — regional revision** [lotz1994]
- Lotz restored *L. cinctus* and *L. renivulvatus* from broad *mactans* synonymy. **established — taxonomic acts** [lotz1994]
- *L. rhodesiensis* was first recognised as different from brown widows through smooth egg sacs. **established — discovery history** [mackay1973]
- Its sacs were white when new and became dirty-white in the described material. **supported** [mackay1973]
- *L. umbukwane* was described from northern KwaZulu-Natal sand forest. **established — type-region evidence** [wright2019]
- Fresh *L. umbukwane* egg sacs were purple and later became shiny grey. **supported** [wright2019]
- Its description combined morphology with COI sequences. **established — study methods** [wright2019]
- The authors recommended Data Deficient because distribution remained uncertain. **supported — 2019 recommendation, not an independently checked current IUCN listing** [wright2019]

### TERMS

- **Button spider:** a regional common name for widows; not a taxonomic rank. [wright2019]
- **AOO / EOO:** area of occupancy / extent of occurrence, different distribution measures. [wright2019]
- **Revalidation:** restoring a previously synonymised name to valid species status. [lotz1994]

### Claims to avoid

- Do not apply the North American red-hourglass rule to all African black button spiders. [lotz1994]
- “The largest widow in the world” is not established by a matched all-species size comparison here.
- AOO and EOO from potential habitat must retain their model qualification. [wright2019]
- Do not reuse a 1994 regional species total as the 2026 African total; new species and island treatments intervene. [wsc2026; wright2019]
- Species-group names in Lotz are morphological groupings and should not silently replace the molecular clade terminology. [lotz1994; garb2004]

## 10. genus.red-widow — The Red Widow of Florida Scrub

**Suggested kicker:** A specialised habitat, a long population record.

**Suggested summary:** *L. bishopi* is a Florida endemic associated with palmettos in scrub habitat. Repeated surveys document large local population fluctuations, while prey collections connect it to the distinctive insect fauna of the scrub. [carrel2001; carrel2014]

**Taxa studied:** *L. bishopi* at Archbold Biological Station, Florida; palmettos *Serenoa repens* and *Sabal etonia*; arthropod prey. [carrel2001; carrel2014]

### FIGURES

| Value | Unit | Short label | Qualifier / locator | Sources |
|---|---|---|---|---|
| 1987–2000 | survey years | Repeated population monitoring | Late-winter censuses at Archbold, not a statewide trend | [carrel2001] |
| 10 × ≈0.5 | transects × ha | Monitoring footprint | Ten approximately half-hectare transects | [carrel2001] |
| 395/398 | spiders | Palmetto retreats | All but three detections in the monitoring study | [carrel2001] |
| 31 → 0.3 | spiders per ha | A local population decline | Mean density, 1989 peak to 1997 minimum; recovery followed | [carrel2001] |
| ≈0.5 / ≈0.3 | m retreat height | Saw / scrub palmetto | Species-associated heights in that study | [carrel2001] |
| 30 | female webs per season | Sampling meals | Two five-day sampling periods: March 1989 and May 2003 | [carrel2014] |

### OBSERVATIONS

- WSC accepts *L. bishopi* as a species rather than a southern-widow subspecies. **established** [wsc2026]
- The species is restricted to peninsular Florida scrub in the checked regional account. **established** [floridanaturalareasinventory2023]
- The carapace and legs are reddish, contrasting with the dark patterned abdomen. **established — identification account** [floridanaturalareasinventory2023]
- Almost every spider in the long-term study placed its retreat in palmetto leaves. **supported** [carrel2001]
- Retreat height differed between saw palmetto and scrub palmetto. **supported** [carrel2001]
- Monitored density fell sharply before beginning to recover. **supported — local time series** [carrel2001]
- The study found no apparent reduction in subsequent populations after its spring or summer burns. **supported — observed burns, not all fire regimes** [carrel2001]
- Dietary sampling examined prey captured by adult female webs in two spring seasons. **established — study design** [carrel2014]
- The prey study documented extensive use of endemic scrub scarab beetles. **supported** [carrel2014]
- The 2023 Florida inventory account reported no evidence of recent population declines across its reviewed information. **supported — dated conservation account** [floridanaturalareasinventory2023]

### TERMS

- **Scrub:** the Florida habitat type used here, not a synonym for any shrubland. [floridanaturalareasinventory2023]
- **Transect:** a defined strip or route repeatedly surveyed. [carrel2001]
- **Endemic prey:** prey species with restricted native ranges. [carrel2014]

### Claims to avoid

- The 1989–1997 local decline is not evidence for an equivalent current statewide decline. [carrel2001; floridanaturalareasinventory2023]
- Do not claim fire is always harmless or prescribe a burn interval from this spider census alone. [carrel2001]
- Scarab use does not establish obligate dependence on a single beetle or that diet alone causes its geographic restriction. [carrel2014]
- Do not confuse the red widow with the Australian redback or with a red-marked southern widow.

## 11. genus.pale-widows — Pale Widows of Dry Country

**Suggested kicker:** A widow need not be black.

**Suggested summary:** The white widow *L. pallidus* and desert widow *L. revivensis* are different species, with separate evidence for mating behaviour and habitat choice. Their pale colours and shrub webs broaden the familiar image of a widow. [nentwig2026c; segoli2006; lubin1993]

**Taxa studied:** *L. pallidus* morphology and field mating; *L. revivensis* web relocation in Negev shrubland. [nentwig2026c; segoli2006; lubin1993]

### FIGURES

| Value | Unit | Short label | Qualifier / locator | Sources |
|---|---|---|---|---|
| 11–13 / 3.5–5.5 | mm body length | White-widow female / male | Spiders of Europe descriptive ranges | [nentwig2026c] |
| <20 | % searching males reaching a female | A difficult mate search | Field *L. pallidus* population; not a mortality measurement for every missing male | [segoli2006] |
| Up to 6 | inferred male partners per female | Female multiple mating | *L. pallidus*; embolus-tip evidence gives a minimum partner estimate | [segoli2006] |
| 74 | % moves | Juvenile relocations | *L. revivensis* marked field population | [lubin1993] |
| 40 | % estimated mortality during moves | Relocation risk | Same *L. revivensis* study; not a genus-wide journey risk | [lubin1993] |

### OBSERVATIONS

- White-widow females can have whitish or pale-yellow abdomens with brown dots. **established — identification account** [nentwig2026c]
- Their abdominal setae are short. **established — identification account** [nentwig2026c]
- WSC records *L. pallidus* across parts of Africa and western/central Asia. **established — range summary** [wsc2026]
- White-widow male encounter rates were low in a field movement study. **supported** [segoli2006]
- Field-caught females often bore evidence of more than one male partner. **supported** [segoli2006]
- Low encounter rates and male competition were proposed to favour high investment in one mating. **supported — evolutionary interpretation** [segoli2006]
- Desert widows constructed webs on scattered Negev shrubs. **established — study population** [lubin1993]
- Growing desert widows tended to relocate to larger shrubs after moults. **supported** [lubin1993]
- Most recorded relocations were by juveniles and occurred in spring. **supported** [lubin1993]
- Larger-shrub relocation improved body condition and reproductive success in the study. **supported — association** [lubin1993]

### TERMS

- **Mate encounter rate:** the fraction of searchers reaching a potential mate under the study's monitoring protocol. [segoli2006]
- **Embolus tip:** a broken copulatory fragment used as evidence of mating history. [segoli2006]
- **Habitat selection:** use of some available sites disproportionately to their availability. [lubin1993]

### Claims to avoid

- Pale colour does not establish harmlessness, heat reflection, camouflage effectiveness or a venom ranking.
- Do not transfer white-widow mating figures to *L. revivensis* or desert-widow movement risk to *L. pallidus*.
- WSC marks the Canary Islands record of *L. revivensis* with a question mark; retain that uncertainty. [wsc2026]
- The current WSC *pallidus* range includes South Africa, but a first report is not an introduction date. [wsc2026]

## 12. genus.south-american — South America's Many Widows

**Suggested kicker:** Local names conceal a complicated species history.

**Suggested summary:** South American widows include distinct regional species and names repeatedly revised as new evidence arrives. Field diet studies and egg-sac comparisons remain informative when their original identifications are preserved. [wsc2026; pompozzi2013; miller2026b]

**Taxa studied:** *L. mirabilis* as identified in Argentine crop research; *L. thoracicus* in Chilean taxonomy; *L. antheratus*, *L. corallinus*, *L. curacaviensis*, *L. diaguita*, *L. quartus*, *L. variegatus*, *L. hurtadoi* and *L. lucacha* in regional descriptions/catalogs. [pompozzi2013; aguilera2009; wsc2026; miller2026b]

### FIGURES

| Value | Unit | Short label | Qualifier / locator | Sources |
|---|---|---|---|---|
| 1,004 | prey items | Widow meals in cereal fields | Study labelled *L. mirabilis*, central Argentina; original name retained | [pompozzi2013] |
| >86 | % prey items | Ant-dominated catches | Same wheat/oat field sample; item frequency, not biomass | [pompozzi2013] |
| 4 | h | Half the offered ants captured | Laboratory ant-capture experiment in that paper; not a natural daily capture rate | [pompozzi2013] |
| ≈7–10 | mm sac diameter | An Andean comparison | *L. lucacha* sacs; white, woolly and unornamented | [miller2026b] |
| 2009 / 2026 | years | Revalidation / new description | *L. thoracicus* revalidated / *L. lucacha* described | [aguilera2009; miller2026b] |

### OBSERVATIONS

- WSC accepts *L. antheratus*, *L. diaguita*, *L. quartus* and *L. variegatus* separately. **established — catalog snapshot** [wsc2026]
- WSC records *L. antheratus* from Paraguay and Argentina. **established** [wsc2026]
- The checked *L. corallinus* account includes Panama, Brazil and Argentina. **established — catalog occurrence** [wsc2026]
- WSC treats *L. garbae* as a synonym of *L. corallinus* following the July 2026 study. **established — catalog treatment** [wsc2026; zabalacruz2026]
- Chilean *L. thoracicus* was restored using biological and phylogenetic evidence. **supported — taxonomic study** [aguilera2009]
- The Argentine crop study identified its spiders as *L. mirabilis*. **established — original identification** [pompozzi2013]
- Ants dominated that study's web-remnant samples. **supported** [pompozzi2013]
- Laboratory trials also demonstrated capture of leaf-cutting ants. **supported** [pompozzi2013]
- The Andean description compares egg-sac texture and shape among South American species. **established — taxonomic observations** [miller2026b]
- Some South American sacs bear detachable pompoms, complicating the idea that only brown widows ornament their sacs. **supported — comparative description** [miller2026b]

### TERMS

- **Polyphagy:** eating several prey types; numerical dominance by ants does not itself mean obligate ant specialisation. [pompozzi2013]
- **Synonymy:** different available names treated as referring to one species. [wsc2026]
- **Voucher:** a preserved specimen connecting a study's identification to material that can be re-examined. [aguilera2009]

### Claims to avoid

- Do not rename every old South American “*mactans*” record as one chosen modern species.
- The November atlas differs from WSC: *mirabilis* → *thoracicus*; *corallinus* → *geographicus*; *garbae* revalidated. These are alternative current treatments, detailed below. [miller2026]
- Do not pool the crop-study diet with Brazilian or Caribbean populations under a silent name substitution. [pompozzi2013]
- Retain *L. curacaviensis*'s Caribbean component; it is not exclusively a mainland South American label. [wsc2026]

## 13. genus.asian — Widows Across Asia

**Suggested kicker:** One continent contains several widow stories.

**Suggested summary:** Asian widows range from *L. elegans* in eastern and southern Asia to *L. dahli* and *L. hystrix* farther west. Regional taxonomic work and genome sequencing show why these spiders should not all be called redbacks or Mediterranean widows. [wsc2026; kananbala2012; wang2022]

**Taxa studied:** *L. elegans* from Manipur and the genome study; *L. dahli*, *L. hystrix*, *L. erythromelas* and other species through WSC taxonomic records. [kananbala2012; wang2022; wsc2026]

### FIGURES

| Value | Unit | Short label | Qualifier / locator | Sources |
|---|---|---|---|---|
| 9.53 | mm body length | An Indian voucher | *L. elegans* female WILD-11-ARA-1113, p. 2719; one specimen | [kananbala2012] |
| 930 | m elevation | Manipur collection | Two females collected 5–8 May 2011, Thawai Village | [kananbala2012] |
| 1.57 | Gb | An Asian widow genome | *L. elegans* assembly length; Results, Genome assembly | [wang2022] |
| ≈1.74 | Gb | Estimated genome size | Same study's k-mer estimate, distinct from assembled length | [wang2022] |
| 14 / 114.31 | assembled chromosomes / Mb scaffold N50 | Assembly organisation | *L. elegans*, not all Asian widows | [wang2022] |

### OBSERVATIONS

- WSC records *L. elegans* from India, Nepal, Myanmar, China and Japan. **established — occurrence summary** [wsc2026]
- The Manipur paper documented an Indian record with preserved female specimens. **established** [kananbala2012]
- Live females had a red dorsal pattern and red ventral hourglass. **supported — described specimens** [kananbala2012]
- The species has a published chromosome-scale genome assembly. **established** [wang2022]
- Its estimated genome size exceeded the assembled sequence length. **established — different assembly metrics** [wang2022]
- WSC records *L. dahli* across North Africa and western/central Asia. **established** [wsc2026]
- WSC restricts *L. hystrix* to Yemen, including mainland and Socotra. **established — checked range** [wsc2026]
- WSC currently retains *L. erythromelas* from India and Sri Lanka. **established — catalog treatment** [wsc2026]
- Published Chinese records formerly identified as *L. mactans* appear under *L. elegans* as misidentifications in WSC. **established — catalog annotations, not re-identification of every Chinese widow** [wsc2026]

### TERMS

- **K-mer estimate:** genome-size inference from counts of short sequence words. [wang2022]
- **N50:** the length at which half the assembly lies in units at least that long. [wang2022]
- **Voucher measurement:** a value for an identified specimen, not a species mean. [kananbala2012]

### Claims to avoid

- *L. hystrix* is not an eastern Asian species; include Arabia within this case's stated geographic scope. [wsc2026]
- Do not use one *L. elegans* voucher's length as the maximum for Asian widows. [kananbala2012]
- The November atlas treats *erythromelas* under revalidated *L. indicus*; preserve the WSC/atlas distinction. [miller2026]
- Neither chromosome count nor a red stripe assigns an unknown Asian specimen to *L. elegans*.

## 14. genus.family-tree — The Widow Family Tree

**Suggested kicker:** A branching hypothesis, with dates that carry uncertainty.

**Suggested summary:** Molecular work established a deep split between sampled brown-widow relatives and most other widows. A 2026 multilocus analysis expands that framework and supplies provisional dates, while leaving some branching relationships unsettled. [garb2004; garb2013; miller2026]

**Taxa studied:** Globally sampled *Latrodectus*; OTHER THERIDIIDS used for rooting include *Steatoda*, *Crustulina* and *Asagena*, with deeper theridiid sampling in the calibrated analysis. [garb2004; garb2013; miller2026]

### FIGURES

| Value | Unit | Short label | Qualifier / locator | Sources |
|---|---|---|---|---|
| 428 | bp | An early molecular window | COI alignment in Garb et al.; short mitochondrial locus, not a genome-wide tree | [garb2004] |
| 3 | loci | A later multilocus framework | COI, mitochondrial 16S, nuclear 28S; atlas Methods | [miller2026] |
| 35.65 (27.17–44.35) | Ma | Widow crown age | Table 8, L451 calibrated birth–death model; median and reported 95% interval, provisional | [miller2026] |
| 29.96 (18.06–40.84) / 29.64 (22.82–37.12) | Ma | Geometricus / mactans group crowns | Same Table 8 model; not the date of their split | [miller2026] |
| 3.05 (1.80–4.64) | Ma | Australasian crown | Same model; *hasselti–katipo* lineage split estimate, not invasion age | [miller2026] |

### OBSERVATIONS

- The 2004 COI analyses supported widow monophyly. **supported — sampled taxa and locus** [garb2004]
- Those analyses paired *L. geometricus* with African *L. rhodesiensis*. **supported** [garb2004]
- Most other sampled widows formed the *mactans* clade. **supported — original sampling** [garb2004]
- Short mitochondrial sequences gave limited resolution among some deeper branches. **supported — authors' limitation** [garb2004]
- The 2013 toxin-gene study added a separate molecular character system for comparisons. **established — α-latrotoxin, not an independent whole genome** [garb2013]
- The atlas infers an Afroeurasian origin and separate continental radiations. **supported — historical reconstruction** [miller2026]
- *L. umbukwane*'s placement changes with analysis method. **debated — topology** [miller2026]
- Low effective sample sizes warrant caution about atlas dates. **supported — authors' diagnostic** [miller2026]

### TERMS

- **Monophyletic clade:** an ancestor and all descendants included in the grouping. [garb2004]
- **Outgroup:** a lineage outside the focal group used to orient its tree. [garb2004]
- **Crown / stem:** the most recent shared ancestor of living members / the lineage leading to that crown. [miller2026]
- **Ma:** millions of years before the present; not a measured fossil age for a modern species.

### Claims to avoid

- “Widows definitely originated in Africa” is narrower than the atlas's reconstruction. [miller2026]
- Two robust old clades do not guarantee every newly sampled species fits one unchanging topology. [wright2019; miller2026]
- The atlas narrative places origin near 45 Ma, but Table 8's widow crown is near 36 Ma; do not conflate stem and crown.
- Do not replace the dated estimate with a universal 100,000-year redback–katipō split from news coverage; dating approaches differ.
- A toxin-gene tree is not automatically a species tree. [garb2013]

## 15. genus.naming — Naming the Widows

**Suggested kicker:** A name can survive while its species boundary changes.

**Suggested summary:** Widow taxonomy moved from many named forms through Levi's broad lumping to renewed recognition of regional species. Current revisions combine specimens, DNA and natural history, and the newest paper and catalog have not yet converged. [levi1959; lotz1994; valdezmondragon2023; wsc2026; miller2026]

**Taxa studied:** The genus as a whole; North American, African, Mexican and South American regional treatments. [levi1959; mccrone1964; kaston1970; lotz1994; valdezmondragon2023; miller2026b]

### FIGURES

| Value | Unit | Short label | Qualifier / locator | Sources |
|---|---|---|---|---|
| 1805 / 81 | year / page | Walckenaer's genus | Original account as indexed by WSC | [wsc2026] |
| 6 | species retained | Levi's 1959 system | As enumerated in Lotz's historical review, p. 3; not today's count | [levi1959; lotz1994] |
| 1964 / 1970 / 1994 | years | Regional rebuilding | North American curacaviensis-group revision / Kaston comparison / African revision | [mccrone1964; kaston1970; lotz1994] |
| 2023 / 2026 | description years | Occidentalis / lucacha | Different new species; do not merge their authorities | [valdezmondragon2023; miller2026b] |
| 39 + 1 | named species + unnamed lineage | The November atlas treatment | 39 valid named species; one additional lineage awaiting description; not the WSC roster | [miller2026] |

### OBSERVATIONS

- WSC credits the genus to Walckenaer, 1805. **established** [wsc2026]
- Its type species is *L. tredecimguttatus*, originally described by Rossi. **established** [wsc2026]
- Levi's revision placed many regional names under a broad *L. mactans*. **established — historical treatment** [levi1959; wsc2026]
- Subsequent North American work distinguished species that the broad system obscured. **established — regional revisions** [mccrone1964; kaston1970]
- Lotz restored African species using morphology and other biological characters. **established — regional revision** [lotz1994]
- WSC records *Chacoca* as a junior synonym of *Latrodectus*. **established — genus synonymy** [wsc2026]
- The *L. occidentalis* description integrated COI, ITS2, morphology and distribution modelling. **established — methods** [valdezmondragon2023]
- The original Andean description established *L. lucacha* in June 2026. **established** [miller2026b]
- WSC currently follows the July 2026 *garbae–corallinus* synonymy. **established — checked catalog** [wsc2026; zabalacruz2026]
- The November atlas rejects that synonymy. **debated — competing taxonomic treatments** [miller2026]

### TERMS

- **Authority:** the author and date of a zoological name; distinct from the authors of a later revision. [wsc2026]
- **Junior synonym:** the later name when two names are treated as one species. [wsc2026]
- **Integrative taxonomy:** combining independent character systems to evaluate species boundaries. [valdezmondragon2023]
- **Nomen dubium:** a name of uncertain application; exclude it from a checklist of accepted species. [wsc2026]

### Claims to avoid

- A monotonic “discovery count”: revalidation and synonymy change totals without discovering new animals.
- Do not list `Valdez-Mondragón & Cabrera-Espinosa` as the species authority of *occidentalis*; WSC credits Valdez-Mondragón alone. [wsc2026]
- Do not change the source key `miller2026` to the Andean paper: it already identifies the atlas; the Andean description is `miller2026b`.
- A changed name does not retroactively verify a study's specimen identity. [valdezmondragon2023]

### November 2026 nomenclature reconciliation

This is an explicit comparison of the atlas's Table 1 with the checked WSC list, not an instruction to alter the requested roster. The seven atlas revalidations and three synonymisations give 35 + 7 − 3 = 39 named species. [wsc2026; miller2026]

| Name | Checked WSC roster | Atlas treatment | Sources |
|---|---|---|---|
| *L. ancorifer* Dahl, 1902 | Excluded; synonym | Revalidated | [wsc2026; miller2026] |
| *L. garbae* Rueda & Realpe, 2021 | Excluded under *corallinus* | Revalidated | [wsc2026; miller2026] |
| *L. geographicus* van Hasselt, 1888 | Excluded; synonym | Revalidated | [wsc2026; miller2026] |
| *L. indicus* Simon, 1897 | Excluded; synonym | Revalidated | [wsc2026; miller2026] |
| *L. insularis* Dahl, 1902 | Excluded; synonym | Revalidated | [wsc2026; miller2026] |
| *L. lunulifer* Dahl, 1902 | Excluded; synonym | Revalidated | [wsc2026; miller2026] |
| *L. luzonicus* Dahl, 1902 | Excluded; synonym | Revalidated | [wsc2026; miller2026] |
| *L. corallinus* Abalos, 1980 | Accepted | Synonym of *geographicus* | [wsc2026; miller2026] |
| *L. erythromelas* Schmidt & Klaas, 1991 | Accepted | Synonym of *indicus* | [wsc2026; miller2026] |
| *L. mirabilis* (Holmberg, 1876) | Accepted | Synonym of *thoracicus* | [wsc2026; miller2026] |

## 16. genus.invasions — Widows in Transit

**Suggested kicker:** Silk disperses locally; commerce can cross oceans.

**Suggested summary:** Brown widows and redbacks have established populations far from their original ranges. Occurrence dates, field dispersal and genetic lineages reveal different parts of that history, but rarely identify a unique shipping route. [garb2004; sadir2021; vink2011; mowery2022; katahira2026]

**Taxa studied:** *L. geometricus* in North America, Israel and Japan; *L. hasselti* in New Zealand, Japan and Australia. [sadir2021; mowery2022; katahira2026; vink2011; mowery2022b]

### FIGURES

| Value | Unit | Short label | Qualifier / locator | Sources |
|---|---|---|---|---|
| 1935 / 2003 | first-record years | Brown widows in Florida / California | Published historical summaries; detection rather than proven arrival | [sadir2021] |
| Early 1980s / 1995 | first-population record dates | Redbacks in New Zealand / Osaka | Vink et al. historical review; not dates for every later locality | [vink2011] |
| 0.2–4.4 | m s⁻¹ wind speed | Observed aerial-dispersal conditions | Brown-widow spiderlings, Israeli field tests; not a required wind interval | [mowery2022] |
| 16.5–42.9 | °C | Temperatures during dispersal | Same observed trials; not physiological tolerance limits | [mowery2022] |
| 6 / 5 | haplotypes | cox1 / 16S variation | Japanese brown widows, n=99; two major lineages | [katahira2026] |

### OBSERVATIONS

- Human transport was implicated in the brown widow's wide, discontinuous distribution by the 2004 phylogeographic study. **supported — historical inference** [garb2004]
- Very small COI differences connected geographically distant sampled brown widows. **supported — locus-specific result** [garb2004]
- North American brown-widow occurrence is strongly associated with urban environments. **supported — distribution analysis** [sadir2021]
- Local overlap with native widows is constrained by differences in environmental associations. **supported — model interpretation** [sadir2021]
- Brown-widow spiderlings ballooned during both day and night in field tests. **supported** [mowery2022]
- Japanese brown widows contained both previously reported and newly detected mitochondrial haplotypes. **supported** [katahira2026]
- The Japanese genetic study did not resolve definitive source populations or individual introduction routes. **established — stated limitation** [katahira2026]
- Redbacks established in New Zealand and Japan despite climates differing from much of Australia. **established — documented populations** [vink2011]
- Invasive Japanese redback eggs performed better at low temperature than the sampled Australian eggs. **supported — common experimental conditions** [mowery2022b]
- The distribution model for redbacks identified human disturbance as a contributor to invasion-associated niche differences. **supported — model inference** [luo2022]

### TERMS

- **Haplotype:** a sequence variant for the linked DNA region being studied. [katahira2026]
- **Ballooning:** airborne dispersal supported by silk. [mowery2022]
- **Realised niche:** conditions where a species actually occurs, affected by more than physiological limits. [luo2022]

### Claims to avoid

- A first record is not a known arrival date; an interception is not proof of establishment. [vink2011; sadir2021]
- Do not draw a unique Africa → Americas → Japan route from shared mitochondrial haplotypes. [katahira2026]
- Do not call every extra-range widow an invasive established population; WSC includes transported records of differing status. [wsc2026]
- Cold-performance differences do not by themselves distinguish genetic adaptation from parental effects or all forms of plasticity. [mowery2022b]
- Ballooning ability does not establish the route of a particular intercontinental invasion. [mowery2022]

## 17. genus.hybrids — Where Species Boundaries Hold

**Suggested kicker:** Attraction, insemination and fertile offspring are different tests.

**Suggested summary:** Some widow pairs can produce laboratory hybrids, while others mate unsuccessfully or fail to yield developing eggs. These contrasting results reveal incomplete and uneven reproductive barriers rather than a single rule for the genus. [kaston1970; kasumovic2004; vink2008; uludag2026]

**Taxa studied:** *L. hasselti* × *L. katipo*; *L. mactans*, *L. hesperus*, *L. variolus*; northern/southern katipō forms and western-widow populations. [kaston1970; kasumovic2004; vink2008; uludag2026]

### FIGURES

| Value | Unit | Short label | Qualifier / locator | Sources |
|---|---|---|---|---|
| 0/4 | inseminations / attempts | Northern × southern | *variolus–mactans*, Kaston p. 56; reciprocal directions not resolved in this summary | [kaston1970] |
| 0/18 | inseminations / attempts | Northern × western | *variolus–hesperus*, same primary passage; not 16, as printed in a later thesis summary | [kaston1970] |
| 3/27 | inseminations / attempts | Southern × western | *mactans–hesperus*; eggs subsequently failed to develop | [kaston1970] |
| 104 | F2 backcross males | Hybrid phenotypes tested | 55 redback-backcross / 49 katipō-backcross males | [uludag2026] |
| 31/55 / 18/49 | males somersaulting | The two backcrosses | Redback / katipō backcrosses; mated to katipō females, Results 3b | [uludag2026] |

### OBSERVATIONS

- Redback males crossed successfully with katipō females in the laboratory. **supported** [uludag2026]
- Hybrid females produced backcross descendants with each parental species. **supported** [uludag2026]
- Somersault and abdominal-constriction phenotypes were not tightly co-inherited. **supported** [uludag2026]
- Somersault proportions were consistent with the tested simple X-linked inheritance expectation. **supported — genetic model, not an identified gene** [uludag2026]
- Abdominal constriction did not fit that same simple expectation. **supported** [uludag2026]
- Kaston's northern–southern and northern–western trials ended without insemination. **supported — limited crosses** [kaston1970]
- Some southern–western crosses achieved insemination without developing eggs. **supported** [kaston1970]
- Western-widow males showed population-dependent attraction to female webs. **supported — field cues** [kasumovic2004]
- Attraction to redback webs was not absent, despite the species difference. **supported — field response** [kasumovic2004]
- Interbreeding and other evidence supported uniting dark northern katipō with red-striped katipō. **supported — integrative species assessment** [vink2008]

### TERMS

- **Prezygotic barrier:** a barrier acting before a zygote forms, including failed mating or sperm transfer. [kaston1970]
- **Postzygotic isolation:** reduced hybrid survival or fertility after fertilisation; do not infer it from an unexamined infertile sac. [uludag2026]
- **Introgression:** incorporation of genetic material through hybridisation and subsequent backcrossing. [vink2008; uludag2026]

### Claims to avoid

- “Can hybridise” does not automatically mean “the same species.” [vink2008]
- No insemination in a small trial is not proof of absolute impossibility in every population and direction. [kaston1970]
- Do not call southern–western non-developing eggs living sterile hybrids. [kaston1970]
- A pheromone response does not demonstrate successful interbreeding. [kasumovic2004]
- Laboratory redback–katipō backcrosses are not a field estimate of genetic swamping. [uludag2026]

## 18. genus.identification — Telling Them Apart

**Suggested kicker:** Look beyond a red mark.

**Suggested summary:** Widow identification combines location, sex, developmental stage, markings and egg sacs. Fine structures and reliably identified specimens are needed where visible patterns overlap. [kaston1970; lotz1994; valdezmondragon2023]

**Taxa studied:** North American *mactans*, *hesperus*, *variolus* and *geometricus*; Mediterranean *tredecimguttatus* and *lilianae*; African *rhodesiensis* and *umbukwane*; OTHER THERIDIIDS, especially *Steatoda*. [kaston1970; vetter2017; melic2000; lotz1994; wright2019]

### FIGURES

| Value | Unit | Short label | Qualifier / locator | Sources |
|---|---|---|---|---|
| Usually continuous | ventral red mark | Southern black widow | Adult female *L. mactans*; field clue with exceptions | [eiden2013; kaston1970] |
| Commonly divided | ventral red mark | Northern black widow | Adult female *L. variolus*; two separated patches | [hiskes2013] |
| Spiked / smooth | sac surface | Brown widow / Rhodesian relative | *L. geometricus* / *L. rhodesiensis*; global comparison, not a universal two-choice key | [mackay1973] |
| Purple → grey | fresh → older sac colour | Phinda forest widow | *L. umbukwane*; smooth surface | [wright2019] |
| Long + short bifid | abdominal setae | Mediterranean widow | Female *L. tredecimguttatus*; microscope character | [nentwig2026b] |

### OBSERVATIONS

- North American adult female black-widow markings overlap and vary within species. **established — comparative series** [kaston1970]
- Juveniles have patterns that can differ markedly from adult females. **established** [kaston1970]
- Mature males retain different proportions and markings from females. **established** [kaston1970]
- The brown widow's mottled body and banded legs can resemble immature western widows. **established — identification account** [vetter2017]
- Brown-widow sacs are a stronger local clue than brown body colour alone. **supported — North American identification** [vetter2017]
- Some South American widows also produce ornamented sacs. **supported — comparative sac descriptions** [miller2026b]
- Dark or spotless Mediterranean widows still belong to *L. tredecimguttatus*. **established — documented colour variation** [nentwig2026b]
- Internal ducts and abdominal setae distinguish otherwise similar regional species. **established — taxonomic use** [melic2000; lotz1994]
- False widows belong to *Steatoda*, another theridiid genus. **established** [vetter2017]
- *Steatoda* look-alikes can lack the familiar red widow marking without being identifiable from that absence alone. **supported — comparative identification** [vetter2017; lotz1994]

### TERMS

- **Ventral / dorsal:** underside / upper side of the body. [lotz1994]
- **Epigynum / vulva:** external / internal female reproductive structures used in identification. [melic2000]
- **Ontogenetic change:** changes across an individual's development. [kaston1970]

### Claims to avoid

- This is not a safe or exhaustive photograph-only key to every accepted widow species.
- “No hourglass means no widow,” “orange means brown widow,” or “all spiked sacs worldwide are *geometricus*.” [lotz1994; vetter2017; miller2026b]
- Do not identify sex from size alone or stage from darkness alone. [kaston1970]
- False widows are not “harmless by definition”; identification should not be converted into an unverified medical assurance. [vetter2017]
- Do not infer the silk producer from an isolated photographed sac when its association with a spider is unknown.

## 19. genus.species-roster — The Catalogued Widows

**Further topic.** Retain as the requested species-roster exhibit, with its own dated catalog snapshot.

**Suggested kicker:** Thirty-five accepted names in the checked catalog.

**Suggested summary:** This roster records every species accepted in the checked World Spider Catalog list on 23 November 2026. A newly published revision uses a different set of names; those changes are listed separately rather than silently mixed into this catalog checklist. [wsc2026; miller2026]

**Taxa studied:** Every accepted species in WSC's *Latrodectus* genus list; individual species accounts supply authorities and distribution. [wsc2026]

### FIGURES

| Value | Unit | Short label | Qualifier / locator | Sources |
|---|---|---|---|---|
| 35 | species rows | Complete checked membership | Alphabetical WSC genus list; synonyms and doubtful names excluded | [wsc2026] |
| 1775 | year | Oldest original species name here | *L. mactans*; comparison of authority years in the roster, not the age of the lineage | [wsc2026] |
| 2023 | year | A Mexican addition | *L. occidentalis* | [wsc2026; valdezmondragon2023] |
| 2026 | year | The newest listed description | *L. lucacha*; June description, not the November atlas | [wsc2026; miller2026b] |

### OBSERVATIONS

- The checked genus list contains the 35 species below. **established — catalog snapshot** [wsc2026]
- *L. lucacha* is included. **established** [wsc2026]
- *L. garbae* is excluded because the checked catalog places it in synonymy. **established** [wsc2026]
- *L. atritus* is not an additional accepted species. **established** [wsc2026]
- *L. mirabilis* remains accepted in this catalog snapshot despite the newer atlas synonymy. **established — source disagreement retained** [wsc2026; miller2026]
- WSC explicitly distinguishes introduced from other distributions for several widely moved species. **established — catalog fields** [wsc2026]

### TERMS

- **Binomial:** genus plus species epithet. [wsc2026]
- **Authority parentheses:** indicate that the species was originally described in a different genus; keep punctuation exactly in production data. [wsc2026]
- **— in common-name column:** no independently verified species-specific English common name retained in this pass; not a claim that no vernacular name exists.

### Claims to avoid

- “The last word on widow species”: this is explicitly the WSC snapshot, not a claim that the atlas is unavailable or invalid. [miller2026]
- Do not inflate membership with synonyms, subspecies or *nomina dubia*.
- Do not label every catalogued locality “native.” The column below identifies native cores where supported and flags occurrence-only summaries elsewhere.

### Complete species checklist — WSC snapshot checked 23 November 2026

Each binomial links to its checked WSC species account; the source key remains `wsc2026`, reused rather than creating 35 duplicate registry entries. Authorities are split into author and year columns; parentheses are preserved by enclosing the author and year together when rendering a full authority. Common names are display labels rather than taxonomic synonyms. [wsc2026]

| Binomial | Author | Year | Common name retained | Native distribution summary / explicit limits | Source key |
|---|---|---|---|---|---|
| [*Latrodectus antheratus*](https://wsc.nmbe.ch/spec-data/45661) | (Badcock) | 1932 | — | Paraguay and Argentina; catalogued range, not a tested native-status map | [wsc2026] |
| [*Latrodectus apicalis*](https://wsc.nmbe.ch/spec-data/45662) | Butler | 1877 | — | Galápagos Islands | [wsc2026] |
| [*Latrodectus bishopi*](https://wsc.nmbe.ch/spec-data/45663) | Kaston | 1938 | Red widow | USA in WSC; native peninsular Florida scrub in the regional account | [wsc2026; floridanaturalareasinventory2023] |
| [*Latrodectus cinctus*](https://wsc.nmbe.ch/spec-data/45664) | Blackwall | 1865 | — | Cape Verde and Africa; catalog also records Oman, Kuwait, Iraq and Iran; native status not separately assigned to every outlying record | [wsc2026] |
| [*Latrodectus corallinus*](https://wsc.nmbe.ch/spec-data/45665) | Abalos | 1980 | — | Catalogued in Panama, Brazil and Argentina; Colombia appears in the synonym history of *garbae* but is absent from the displayed distribution string | [wsc2026] |
| [*Latrodectus curacaviensis*](https://wsc.nmbe.ch/spec-data/45666) | (Müller) | 1776 | — | Caribbean and South America; retain broad catalog geography pending revised species limits | [wsc2026] |
| [*Latrodectus dahli*](https://wsc.nmbe.ch/spec-data/45667) | Levi | 1959 | — | North Africa, Cyprus, Turkey, Azerbaijan, Kazakhstan, Middle East, Iran and Central Asia | [wsc2026] |
| [*Latrodectus diaguita*](https://wsc.nmbe.ch/spec-data/45668) | Carcavallo | 1960 | — | Argentina | [wsc2026] |
| [*Latrodectus elegans*](https://wsc.nmbe.ch/spec-data/45669) | Thorell | 1898 | — | India, Nepal, Myanmar, China and Japan | [wsc2026] |
| [*Latrodectus erythromelas*](https://wsc.nmbe.ch/spec-data/45670) | Schmidt & Klaas | 1991 | — | India and Sri Lanka; WSC membership retained despite atlas synonymy | [wsc2026] |
| [*Latrodectus geometricus*](https://wsc.nmbe.ch/spec-data/45671) | C. L. Koch | 1841 | Brown widow | Africa; WSC explicitly lists introductions to both Americas, St Helena, Middle East, Iran, Pakistan, India, China, Japan, Thailand, Malaysia, Papua New Guinea, Australia and Hawaii | [wsc2026] |
| [*Latrodectus hasselti*](https://wsc.nmbe.ch/spec-data/45672) | Thorell | 1870 | Redback | WSC's non-introduced range is Southeast Asia–Australia; explicitly introduced in Pakistan, India, Japan and New Zealand; Australian native core secure, broader limits affected by atlas revalidations | [wsc2026; vink2011] |
| [*Latrodectus hesperus*](https://wsc.nmbe.ch/spec-data/45673) | Chamberlin & Ivie | 1935 | Western black widow | Canada, USA and Mexico; catalog explicitly lists Israel and Korea as introduced | [wsc2026] |
| [*Latrodectus hurtadoi*](https://wsc.nmbe.ch/spec-data/66246) | Rueda & Realpe | 2021 | — | Colombia | [wsc2026] |
| [*Latrodectus hystrix*](https://wsc.nmbe.ch/spec-data/45674) | Simon | 1890 | — | Yemen, mainland and Socotra | [wsc2026] |
| [*Latrodectus indistinctus*](https://wsc.nmbe.ch/spec-data/45675) | O. Pickard-Cambridge | 1904 | — | Namibia and South Africa | [wsc2026] |
| [*Latrodectus karrooensis*](https://wsc.nmbe.ch/spec-data/45676) | Smithers | 1944 | — | South Africa | [wsc2026] |
| [*Latrodectus katipo*](https://wsc.nmbe.ch/spec-data/45677) | Powell | 1871 | Katipō | New Zealand, endemic | [wsc2026; vink2008] |
| [*Latrodectus lilianae*](https://wsc.nmbe.ch/spec-data/45678) | Melic | 2000 | — | Spain; do not add Portugal from generalised “Iberian” labels | [wsc2026] |
| [*Latrodectus lucacha*](https://wsc.nmbe.ch/spec-data/73770) | Miller, Kratzer & Griswold | 2026 | — | Ecuador, Peru, Bolivia and Chile; examined specimens in Peru, extra-Peruvian extension supported by photographs in the description | [wsc2026; miller2026b] |
| [*Latrodectus mactans*](https://wsc.nmbe.ch/spec-data/45679) | (Fabricius) | 1775 | Southern black widow | Probably native only to North America; WSC explicitly lists introductions to South America, Europe and Asia | [wsc2026] |
| [*Latrodectus menavodi*](https://wsc.nmbe.ch/spec-data/45680) | Vinson | 1863 | — | Madagascar, Comoros and Seychelles (Aldabra); catalog does not assign native status separately among islands | [wsc2026] |
| [*Latrodectus mirabilis*](https://wsc.nmbe.ch/spec-data/45681) | (Holmberg) | 1876 | — | Brazil and Argentina; original name retained in cited ecological studies | [wsc2026] |
| [*Latrodectus obscurior*](https://wsc.nmbe.ch/spec-data/45682) | Dahl | 1902 | — | Cape Verde Islands and Madagascar; native versus transported island status not resolved by the catalog string | [wsc2026] |
| [*Latrodectus occidentalis*](https://wsc.nmbe.ch/spec-data/68699) | Valdez-Mondragón | 2023 | — | Mexico | [wsc2026] |
| [*Latrodectus pallidus*](https://wsc.nmbe.ch/spec-data/45683) | O. Pickard-Cambridge | 1872 | White widow | Cape Verde–Egypt, South Africa, Turkey, Georgia, Kazakhstan, Iran and Central Asia; catalogued range, no introduction status supplied per region | [wsc2026] |
| [*Latrodectus quartus*](https://wsc.nmbe.ch/spec-data/45684) | Abalos | 1980 | — | Argentina | [wsc2026] |
| [*Latrodectus renivulvatus*](https://wsc.nmbe.ch/spec-data/45685) | Dahl | 1902 | — | Africa, Yemen, Saudi Arabia and Iraq; St Helena also catalogued, without an explicit native-status assignment | [wsc2026] |
| [*Latrodectus revivensis*](https://wsc.nmbe.ch/spec-data/45686) | Shulov | 1948 | Desert widow | Israel and Iran; Canary Islands record explicitly questioned by WSC | [wsc2026] |
| [*Latrodectus rhodesiensis*](https://wsc.nmbe.ch/spec-data/45687) | Mackay | 1973 | — | Namibia, Botswana, Zimbabwe and South Africa | [wsc2026] |
| [*Latrodectus thoracicus*](https://wsc.nmbe.ch/spec-data/45688) | Nicolet | 1849 | — | Chile in WSC; do not silently substitute the atlas's broader *thoracicus* concept | [wsc2026] |
| [*Latrodectus tredecimguttatus*](https://wsc.nmbe.ch/spec-data/45689) | (Rossi) | 1790 | Mediterranean / European black widow | Mediterranean, Ukraine, Caucasus, European Russia–southern Siberia, Kazakhstan, Middle East, Iran, Central Asia and China | [wsc2026] |
| [*Latrodectus umbukwane*](https://wsc.nmbe.ch/spec-data/64268) | B. M. O. G. Wright, C. D. Wright, Lyle & Engelbrecht | 2019 | Phinda button spider | South Africa; verified type-region habitat is northern KwaZulu-Natal sand forest | [wsc2026; wright2019] |
| [*Latrodectus variegatus*](https://wsc.nmbe.ch/spec-data/45690) | Nicolet | 1849 | — | Chile and Argentina | [wsc2026] |
| [*Latrodectus variolus*](https://wsc.nmbe.ch/spec-data/45691) | Walckenaer | 1837 | Northern black widow | Canada and USA | [wsc2026] |

## 20. genus.andean — A New Widow from the Andes

**Further topic.** Retain: a recent, evidence-rich example connecting field photographs, museum specimens and a new species description.

**Suggested kicker:** A species can be newly named after years in collections.

**Suggested summary:** *L. lucacha* was described in June 2026 from Andean material, with DNA barcodes and morphological comparisons. Museum specimens and identifiable field photographs provide different levels of evidence for its range. [miller2026b]

**Taxa studied:** *L. lucacha*, compared with South American congeners; the female holotype and measured male are different individuals from different localities. [miller2026b]

### FIGURES

| Value | Unit | Short label | Qualifier / locator | Sources |
|---|---|---|---|---|
| 8.1 | mm female body length | The holotype | Pachacayo, Junín, Peru, MUSM-ENT 0519569; Description | [miller2026b] |
| 2.8 | mm male body length | A measured male | Pantanos de Villa Om, Lima, Peru; not a population mean or the female's mate | [miller2026b] |
| 3,540 | m elevation | The type locality | August 2006 collection; not the species' lower or upper elevational limit | [miller2026b] |
| ≈7–10 | mm diameter | A plain white sac | Spherical, moderately woolly, without ornamentation | [miller2026b] |
| 122 | photographic records | Citizen-science contribution | iNaturalist records identified for the description's occurrence dataset; not 122 preserved vouchers | [miller2026b] |

### OBSERVATIONS

- The description established *L. lucacha* on 2 June 2026. **established** [miller2026b]
- Its holotype came from Pachacayo in Peru. **established** [miller2026b]
- The female description records three lateral loops of the copulatory ducts. **established — described material** [miller2026b]
- Female dorsal red markings vary in width and length. **supported — compared specimens** [miller2026b]
- Males have an extensively white dorsal abdomen. **supported — diagnostic comparison** [miller2026b]
- The description supplies COI barcode data. **established** [miller2026b]
- Examined museum material documents Peru. **established — specimen evidence** [miller2026b]
- Photographic records extend the inferred range to Ecuador, Bolivia and Chile. **supported — image-based identifications** [miller2026b]
- The distribution model predicts suitable environments rather than verified presence at every predicted site. **supported — model scope** [miller2026b]

### TERMS

- **Holotype:** the single name-bearing specimen designated in the description. [miller2026b]
- **DNA barcode:** a standard sequence region used as identification evidence, here COI. [miller2026b]
- **Species distribution model:** an estimate of suitable conditions from occurrences and environmental variables. [miller2026b]

### Claims to avoid

- “Discovered in 2026” conflates naming with collecting; the holotype was collected in 2006. [miller2026b]
- Do not call the entire range high-altitude: the measured male came from Lima coastal wetland surroundings. [miller2026b]
- The 8.1/2.8-mm comparison is not a paired measurement, a mean sexual size ratio or evidence for different species.
- Do not present photographic records or model predictions as examined museum specimens. [miller2026b]

## Verification and editorial hand-off

### Scope decisions

| Requested subject | Decision and location |
|---|---|
| Existing `the-widows` | Enriched in section 1: family, diagnostic combination, count, dimorphism and phylogeny overview. Detailed topology moves to section 14. |
| Existing `brown-widow` | Heavily enriched in section 2: identity, African range, first records, clutch sample, refuge choice, dispersal, predation and invasion genetics. |
| Planned `redback`, `northern`, `western` | Fully developed in sections 3–5; existing ids retained. |
| Southern black widow | Retained, section 6; its narrow modern identity is distinguished from historical broad *mactans*. |
| Mediterranean widow and Iberian *lilianae* | Merged comparative case, section 7; species-specific measurements and diet kept separate. |
| Katipō | Retained, section 8; dated conservation assessment, dune ecology, displacement hypothesis and laboratory hybridisation. |
| African button spiders | Retained as a comparative regional case, section 9; individual species are not merged taxonomically. |
| Red widow | Retained, section 10; palmetto habitat, population monitoring and prey evidence. |
| White and other pale/desert widows | Merged comparative case, section 11; *pallidus* mating and *revivensis* relocation retain explicit species labels. |
| South American widows | Retained, section 12; ecological studies preserve original names and current disagreements are recorded. |
| Asian widows | Retained, section 13, including western Asia/Arabia. *Hystrix* is correctly placed in Yemen rather than eastern Asia. |
| Family tree | Retained, section 14; old COI framework, newer loci, qualified origin and dated Table 8 estimates. |
| Naming the widows | Retained, section 15; includes the complete atlas/WSC reconciliation rather than silently adding atlas names to the requested roster. |
| Invasions | Retained, section 16; chronology, dispersal, habitat associations and 2026 Japanese genetics. |
| Hybrids and species boundaries | Retained, section 17; separates attraction, insemination, egg development, hybrid fertility and backcross evidence. |
| Telling them apart | Retained, section 18; an evidence-based orientation, not an exhaustive global key. |
| Further: species roster | Retained, section 19, with all 35 accepted WSC names, authorities, years and qualified geographic summaries. |
| Further: Andean discovery | Retained, section 20; a full new case for *L. lucacha*, with specimen, photographic and model evidence distinguished. |
| Further: genome gallery | Merged into Asian/western cases; a standalone genus case would duplicate the molecular resources already used elsewhere. |
| Further: island widows | Merged into the roster and naming notes; sparse verified natural history for *apicalis*, *menavodi* and *obscurior* does not justify three padded cases. |
| Further: global venom league table | Dropped; unmatched assays, uncertain old identifications and clinical attribution cannot support a reliable species ranking. |
| Further: sexual cannibalism as the genus's defining trait | Dropped as a separate Genus case; comparative mating evidence is used cautiously here and detailed behaviour belongs in Life Cycle. |

### Numerical locators, access and unresolved points

- **Catalog membership:** [genus list](https://wsc.nmbe.ch/species-list/3681/Latrodectus), [genus detail](https://wsc.nmbe.ch/genus-detail/3681/Latrodectus), individual species pages linked in the checklist, and the [genus catalog](https://wsc.nmbe.ch/genus-catalog/3681/Latrodectus) were checked through retrieved pages and indexed catalog text. The displayed list's “last updated” fields can lag individual accounts: for example, the *corallinus* account contains July/August 2026 changes while its list row shows an older date. Do not treat that column as the access date. [wsc2026]
- **Catalog access limit:** this is not a downloaded or immutable WSC database release. Several detail-page fetches timed out and were checked via indexed WSC passages. The list and genus-detail count agreed at 35. The dossier records the retrieved snapshot and does not claim a later-December state.
- **White-widow distribution discrepancy:** the retrieved [non-www species page](https://wsc.nmbe.ch/spec-data/45683), line 15, and genus catalog say Cape Verde–Egypt; an indexed `www` version says Cape Verde–Libya. The roster follows the retrieved non-www account, with the mismatch explicitly retained here. Neither string independently establishes native status in all countries. [wsc2026]
- **South American catalog discrepancy:** *garbae* is explicitly a synonym in [its account](https://wsc.nmbe.ch/spec-data/66245), but Colombia is absent from the accepted *corallinus* page's distribution string. The roster flags this rather than quietly expanding the accepted page's distribution. [wsc2026]
- **Newest revision:** [atlas publisher text](https://doi.org/10.1093/zoolinnean/zlag145), Tables 1, 7 and 8, Methods and Systematics, was checked via indexed primary-text passages where the publisher's normal page redirected to an inaccessible minimal page. Table 8 explicitly supplies the date intervals used here; the authors report low ESS for some calibrated parameters. Dates should remain provisional and should not be recombined across models. [miller2026]
- **Stem versus crown:** the atlas narrative's approximately 45-Ma origin differs from Table 8's 35.65-Ma widow crown; the latter is the display card. The 3.05-Ma Australasian split is model-specific and should not be reconciled by averaging it with much younger dates quoted in contemporary news stories. No extra, unverified precision is added. [miller2026]
- **Generic diagnosis:** [Lotz p. 7](https://the-eis.com/elibrary/sites/default/files/downloads/literature/Revision%20of%20the%20genus%20Latrodectus.pdf) supplies the diagnosis and regional size ranges; p. 3 gives the six-species historical summary. “Secret biter” etymology is omitted because the passage derives it from an earlier secondary source rather than establishing a linguistic history. [lotz1994]
- **American morphology and crosses:** [Kaston p. 45 and p. 56](https://research.nhm.org/dataimages/parker/sdnhm.pdf) were checked as indexed primary passages; the full 27-MB PDF exceeded the web reader's size limit. P. 45 gives body-length ranges and sample sizes; p. 56 gives sac shapes and **18** northern–western crossing attempts. A later thesis tabulation says 16; the primary text takes precedence. None of these data is a maximum for the genus. [kaston1970]
- **Modern North American boundaries:** [Mexican taxonomic paper](https://doi.org/10.5852/ejt.2023.897.2293), molecular-marker description and indexed treatments, checked. The roster uses the actual species authority. This dossier does not repeat a female-holotype claim from the Senses dossier: the WSC record marks the *occidentalis* holotype male. That discrepancy is irrelevant to the facts retained here but matters if reusing its specimen measurements. [valdezmondragon2023; wsc2026]
- **Brown-widow nursery:** [Danielsen et al.](https://doi.org/10.3160/0038-3872-113.2.100), pp. 100–101/Fig. 1, checked through indexed original text: 214 sacs, 129.0 ± 51.0 eggs, June–October 2012. The earlier 2011 sample (143.7 ± 61.6; n=30) is different and is not substituted. [danielsen2014]
- **Brown-widow behaviour:** [refugia paper](https://biocontrol.ucr.edu/media/1746/download?attachment=), abstract and experiments; [field dispersal paper](https://doi.org/10.1111/eth.13314), abstract/Discussion and author-deposited data description. Wind and temperature ranges are conditions during observed dispersal, not thresholds. [vetter2016; mowery2022]
- **Competition:** [Coticchio et al.](https://doi.org/10.1093/aesa/saad003), abstract and indexed Table 3 discussion, checked. The precise comparison reported in that passage is 6.6; the abstract rounds it to six. “Fertility potential” is a field-survey comparison, not a measured lifetime reproductive output for all populations. The 80% figure in popular reporting is omitted because its trial-specific denominator was not securely verified here. [coticchio2023]
- **Japanese genetics:** [Katahira et al. primary abstract](https://pubmed.ncbi.nlm.nih.gov/42247303/), n=99, six cox1/five 16S haplotypes, two major lineages; no exact source-route claim. [katahira2026]
- **Redback studies:** [Andrade p. 70](https://doi.org/10.1126/science.271.5245.70), field 11/17 and separate second-male duration experiment, checked through original-text excerpts. [Cold-development abstract](https://pubmed.ncbi.nlm.nih.gov/35648461/) and [2026 chemical paper Results/Fig. 6](https://www.nature.com/articles/s41598-026-49837-w) checked. The 42/5 captures belong to the second trial; the first polybutene trial caught 16/0 and must not be pooled as a single dispenser comparison. [andrade1996; mowery2022b; twidle2026]
- **Northern range:** [Wang et al. Discussion](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0201094), 94-km observed-record difference and additional approximately 50-km predicted suitability. These are historical comparisons, not a 2026 resurvey. [wang2018]
- **Katipō:** [national assessment p. 19](https://www.doc.govt.nz/globalassets/documents/science-and-technical/nztcs34entire.pdf), [Patrick survey abstract](https://www.doc.govt.nz/documents/science-and-technical/sfc194.pdf), [Hann primary abstract](https://doi.org/10.1080/03014223.1990.10422937), and [Vink et al. taxonomic study](https://doi.org/10.1071/IS08027) checked. The official report's title says 2020, but publication is 2021, hence `sirvid2021`. No later complete national reassessment was verified in this pass. The 2002 report's “two endemic widow species” wording predates the synonymy and is not copied. [sirvid2021; patrick2002; hann1990; vink2008]
- **Hybrids:** [Uludağ et al. Methods and Results](https://pmc.ncbi.nlm.nih.gov/articles/PMC13479370/), 104 F2 backcross males and phenotype fractions, checked. The experimental successful direction was katipō female × redback male. Contradictory shorthand about cross direction in later indexed atlas passages is not used to overturn the explicit crossing Methods. [uludag2026]
- **African sacs and conservation:** [Mackay egg-sac section](https://groups.csail.mit.edu/mac/projects/psyche/79/79-236.html) and [Wright description/abstract](https://doi.org/10.11646/zootaxa.4700.4.12) checked. Mackay's volume is dated 1972 but WSC dates the species 1973; retain 1973 for the source key and authority, explaining the volume-year difference. Wright's Data Deficient recommendation is not represented as a freshly checked IUCN assessment. [mackay1973; wright2019]
- **Red widow:** [Carrel 2001 abstract](https://doi.org/10.2307/3496497) and original-text excerpts; [Carrel and Deyrup 2014](https://doi.org/10.1653/024.097.0155); [FNAI January 2023 account](https://www.fnai.org/PDFs/FieldGuides/Latrodectus_bishopi.pdf). The density decline is local and historical; the newer regional account's stability statement is separately dated. [carrel2001; carrel2014; floridanaturalareasinventory2023]
- **Iberian cases:** [Melic p. 22 and diagnosis](https://islandlab.uac.pt/fotos/publicacoes/publicacoes_Melic2000_GeneroLatrodectus%20Walckenaer1805PeninsulaIbrica.pdf) checked through original-text excerpts; [Hódar and Sánchez-Piñero abstract](https://doi.org/10.1017/S0952836902000699), with original 2002 issue year. Species totals and old range assignments in the original description are not adopted uncritically. [melic2000; hodar2002]
- **Pale species:** [white-widow mating abstract](https://doi.org/10.1016/j.anbehav.2005.11.021) and [desert-widow relocation abstract](https://doi.org/10.2307/1940835) checked. Failure to observe a searching male again is not independently proven death; the less-than-20% encounter result is worded accordingly. [segoli2006; lubin1993]
- **South American ecology:** [Pompozzi et al. original abstract](https://sedici.unlp.edu.ar/bitstream/handle/10915/85457/Documento_completo.1590_S0073-47212013000400009.pdf?isAllowed=y&sequence=1), 1,004 prey and >86% ants; [Chilean revalidation](https://doi.org/10.4067/S0717-65382009000200001); [July Colombian study](https://doi.org/10.11646/zootaxa.5845.3.2), metadata and WSC synonymy. The atlas reversal is separately reported; no one-locus species-delimitation method is treated as infallible. [pompozzi2013; aguilera2009; zabalacruz2026; miller2026]
- **Asian/genomic data:** [Indian original description passage](https://doi.org/10.11609/JoTT.o3152.2718-22), p. 2719, 9.53 mm/930 m; [Wang Genome assembly Results](https://doi.org/10.1093/gigascience/giac049), 1.57-Gb assembly versus approximately 1.74-Gb estimate. The inconsistent-looking cephalothorax/abdomen proportions in the Indian paper are not independently corrected or propagated. [kananbala2012; wang2022]
- **Andean paper:** [open original description](https://pmc.ncbi.nlm.nih.gov/articles/PMC13250612/), Diagnosis, Description, occurrence Discussion and Fig. 8, checked through original-text passages and the [Naturalis copy](https://repository.naturalis.nl/pub/802092/Miller-2026-Description-of-a-new-Andean-species.pdf). Its June anticipation of future *corallinus* synonymy is not confused with an already incorporated WSC change. [miller2026b]
- **Evidence limits:** no unverified global venom ranking, all-species size maximum, universal egg count, quantified wild hybridisation rate, or complete photo-only key is supplied. Sparse life-history data for several catalogued species remain a real gap, not an invitation to transfer measurements from congeners.
- **Registry audit:** all 216 existing keys were checked. Existing `wsc2026`, `miller2026`, `garb2013`, `kaston1970`, `vetter2017`, `lotz1994`, `mowery2022`, `mowery2022b`, `forster1995`, `andrade1996`, `valdezmondragon2023`, `johnson2019`, `kasumovic2004`, `twidle2026`, `uludag2026`, `wang2022`, `miles2024` and the other existing citations are reused. New `miller2026b` is the Andean paper. New `nentwig2026b` and `nentwig2026c` distinguish species accounts from existing `nentwig2026` (brown widow).

## SOURCES

Only NEW entries follow. The existing source registry remains authoritative for reused keys. Authors, year, title, container and verified DOI and/or URL follow its schema. These entries are proposed additions, not a replacement registry. No DOI is invented for an unassigned or unverified item.

```yaml
garb2004:
  authors: Garb, J. E.; González, A.; Gillespie, R. G.
  year: 2004
  title: "The black widow spider genus Latrodectus (Araneae: Theridiidae): phylogeny, biogeography, and invasion history"
  container: Molecular Phylogenetics and Evolution 31(3) 1127–1142
  doi: 10.1016/j.ympev.2003.10.012
  url: https://pubmed.ncbi.nlm.nih.gov/15120405/

levi1959:
  authors: Levi, H. W.
  year: 1959
  title: The spider genus Latrodectus (Araneae, Theridiidae)
  container: Transactions of the American Microscopical Society 78(1) 7–43
  doi: 10.2307/3223799
  url: https://wsc.nmbe.ch/reference/3330

mccrone1964:
  authors: McCrone, J. D.; Levi, H. W.
  year: 1964
  title: "North American widow spiders of the Latrodectus curacaviensis group (Araneae: Theridiidae)"
  container: Psyche 71(1) 12–27
  doi: 10.1155/1964/86469
  url: https://groups.csail.mit.edu/mac/projects/psyche/71/71-012.html

danielsen2014:
  authors: Danielsen, D. W. R.; Clarke, D. E.; Valle, S. J.; Ansalmo, A. A.; Vincent, L. S.; Vetter, R. S.
  year: 2014
  title: "Natural egg sac clutch size of the brown widow spider, Latrodectus geometricus (Araneae: Theridiidae) in southern California"
  container: Bulletin of the Southern California Academy of Sciences 113(2) 100–102
  doi: 10.3160/0038-3872-113.2.100

coticchio2023:
  authors: Coticchio, L. A.; Vetter, R.; Cassill, D. L.
  year: 2023
  title: "Predation by the introduced brown widow spider (Araneae: Theridiidae) may explain local extinctions of native black widows in urban habitats"
  container: Annals of the Entomological Society of America 116(3) 174–183
  doi: 10.1093/aesa/saad003
  url: https://academic.oup.com/aesa/article/116/3/174/7044733

sadir2021:
  authors: Sadir, M.; Marske, K. A.
  year: 2021
  title: "Urban environments aid invasion of brown widows (Theridiidae: Latrodectus geometricus) in North America, constraining regions of overlap and mitigating potential impact on native widows"
  container: Frontiers in Ecology and Evolution 9, 757902
  doi: 10.3389/fevo.2021.757902

katahira2026:
  authors: Katahira, H.; Tsutsui, S.; Kishino, S.; Tsujino, T.; Yajima, H.; Sawada, Y.; Eguchi, Y.; Horiguchi, T.; Hirasawa, R.; Hayasaka, D.; Nitta, K.
  year: 2026
  title: "Multiple genetic lineages of the invasive brown widow spider (Araneae: Theridiidae) from inland areas in the Kanto region, Japan"
  container: Journal of Medical Entomology 63(3), tjag077
  doi: 10.1093/jme/tjag077
  url: https://pubmed.ncbi.nlm.nih.gov/42247303/

wang2018:
  authors: Wang, Y.; Casajus, N.; Buddle, C.; Berteaux, D.; Larrivée, M.
  year: 2018
  title: Predicting the distribution of poorly-documented species, Northern black widow (Latrodectus variolus) and Black purse-web spider (Sphodros niger), using museum specimens and citizen science data
  container: PLoS ONE 13(8) e0201094
  doi: 10.1371/journal.pone.0201094

melic2000:
  authors: Melic, A.
  year: 2000
  title: El género Latrodectus Walckenaer, 1805 en la Península Ibérica (Araneae, Theridiidae)
  container: Revista Ibérica de Aracnología 1 13–30
  url: https://islandlab.uac.pt/fotos/publicacoes/publicacoes_Melic2000_GeneroLatrodectus%20Walckenaer1805PeninsulaIbrica.pdf

hodar2002:
  authors: Hódar, J. A.; Sánchez-Piñero, F.
  year: 2002
  title: "Feeding habits of the blackwidow spider Latrodectus lilianae (Araneae: Theridiidae) in an arid zone of south-east Spain"
  container: Journal of Zoology 257(1) 101–109
  doi: 10.1017/S0952836902000699

nentwig2026b:
  authors: Nentwig, W.; Blick, T.; Bosmans, R.; Kropf, C.; Stäubli, A.
  year: 2026
  title: "Spiders of Europe: Latrodectus tredecimguttatus"
  container: araneae online identification database, species account 2138; checked 23 November 2026
  doi: 10.24436/1
  url: https://araneae.nmbe.ch/data/2138/Latrodectus_tredecimguttatus?lang=en

nentwig2026c:
  authors: Nentwig, W.; Blick, T.; Bosmans, R.; Kropf, C.; Stäubli, A.
  year: 2026
  title: "Spiders of Europe: Latrodectus pallidus"
  container: araneae online identification database, species account 4805; checked 23 November 2026
  doi: 10.24436/1
  url: https://araneae.nmbe.ch/data/4805/Latrodectus_pallidus

vink2008:
  authors: Vink, C. J.; Sirvid, P. J.; Malumbres-Olarte, J.; Griffiths, J. W.; Paquin, P.; Paterson, A. M.
  year: 2008
  title: "Species status and conservation issues of New Zealand's endemic Latrodectus spider species (Araneae: Theridiidae)"
  container: Invertebrate Systematics 22(6) 589–604
  doi: 10.1071/IS08027

vink2011:
  authors: Vink, C. J.; Derraik, J. G. B.; Phillips, C. B.; Sirvid, P. J.
  year: 2011
  title: "The invasive Australian redback spider, Latrodectus hasseltii Thorell 1870 (Araneae: Theridiidae): current and potential distributions, and likely impacts"
  container: Biological Invasions 13(4) 1003–1019; first online October 2010
  doi: 10.1007/s10530-010-9885-6

sirvid2021:
  authors: Sirvid, P. J.; Vink, C. J.; Fitzgerald, B. M.; Wakelin, M. D.; Rolfe, J.; Michel, P.
  year: 2021
  title: Conservation status of New Zealand Araneae (spiders), 2020
  container: New Zealand Threat Classification Series 34; Department of Conservation, Wellington
  url: https://www.doc.govt.nz/globalassets/documents/science-and-technical/nztcs34entire.pdf

patrick2002:
  authors: Patrick, B.
  year: 2002
  title: Conservation status of the New Zealand red katipo spider (Latrodectus katipo Powell, 1871)
  container: Science for Conservation 194; Department of Conservation, Wellington
  url: https://www.doc.govt.nz/documents/science-and-technical/sfc194.pdf

hann1990:
  authors: Hann, S. W.
  year: 1990
  title: "Evidence for the displacement of an endemic New Zealand spider, Latrodectus katipo Powell by the South African species Steatoda capensis Hann (Araneae: Theridiidae)"
  container: New Zealand Journal of Zoology 17(3) 295–307
  doi: 10.1080/03014223.1990.10422937

wright2019:
  authors: Wright, B. M. O. G.; Wright, C. D.; Sole, C. L.; Lyle, R.; Tippett, R.; Sholto-Douglas, C.; Verburgt, L.; Engelbrecht, I.
  year: 2019
  title: A new forest dwelling button spider from South Africa (Araneae, Theridiidae, Latrodectus)
  container: Zootaxa 4700(4) 584–600
  doi: 10.11646/zootaxa.4700.4.12
  url: https://pubmed.ncbi.nlm.nih.gov/32229963/

mackay1973:
  authors: Mackay, I. R.
  year: 1973
  title: A new species of widow spider (genus Latrodectus) from southern Africa (Araneae, Theridiidae)
  container: Psyche 79(3) 236–242; volume dated 1972, publication/species authority dated 1973 by WSC
  doi: 10.1155/1972/51723
  url: https://groups.csail.mit.edu/mac/projects/psyche/79/79-236.html

carrel2001:
  authors: Carrel, J. E.
  year: 2001
  title: "Population dynamics of the red widow spider (Araneae: Theridiidae)"
  container: Florida Entomologist 84(3) 385–390
  doi: 10.2307/3496497
  url: https://www.jstor.org/stable/3496497

carrel2014:
  authors: Carrel, J. E.; Deyrup, M.
  year: 2014
  title: "Red widow spiders (Araneae: Theridiidae) prey extensively on scarab beetles endemic in Florida scrub"
  container: Florida Entomologist 97(1) 130–137
  doi: 10.1653/024.097.0155

floridanaturalareasinventory2023:
  authors: Florida Natural Areas Inventory
  year: 2023
  title: "Red widow spider — Latrodectus bishopi"
  container: Florida Natural Areas Inventory field guide; January 2023 account
  url: https://www.fnai.org/PDFs/FieldGuides/Latrodectus_bishopi.pdf

segoli2006:
  authors: Segoli, M.; Harari, A. R.; Lubin, Y.
  year: 2006
  title: "Limited mating opportunities and male monogamy: a field study of white widow spiders, Latrodectus pallidus (Theridiidae)"
  container: Animal Behaviour 72(3) 635–642
  doi: 10.1016/j.anbehav.2005.11.021

pompozzi2013:
  authors: Pompozzi, G.; Ferretti, N.; Schwerdt, L.; Copperi, S.; Ferrero, A. A.; Simó, M.
  year: 2013
  title: The diet of the black widow spider Latrodectus mirabilis (Theridiidae) in two cereal crops of central Argentina
  container: Iheringia, Série Zoologia 103(4) 388–392
  url: https://sedici.unlp.edu.ar/bitstream/handle/10915/85457/Documento_completo.1590_S0073-47212013000400009.pdf?isAllowed=y&sequence=1

aguilera2009:
  authors: Aguilera, M. A.; D'Elía, G.; Casanueva, M. E.
  year: 2009
  title: "Revalidación de Latrodectus thoracicus Nicolet, 1849 (Araneae: Theridiidae): antecedentes biológicos y filogenéticos"
  container: Gayana 73(2) 161–171
  doi: 10.4067/S0717-65382009000200001

zabalacruz2026:
  authors: Zabala-Cruz, M. C.; Hazzi, N. A.
  year: 2026
  title: "COI-based species delimitation reveals the taxonomic status of two recently described Latrodectus species from Colombia (Araneae: Theridiidae)"
  container: Zootaxa 5845(3) 456–477
  doi: 10.11646/zootaxa.5845.3.2

kananbala2012:
  authors: Kananbala, A.; Manoj, K.; Bhubaneshwari, M.; Binarani, A.; Siliwal, M.
  year: 2012
  title: "The first report of the widow spider Latrodectus elegans (Araneae: Theridiidae) from India"
  container: Journal of Threatened Taxa 4(7) 2718–2722
  doi: 10.11609/JoTT.o3152.2718-22

luo2022:
  authors: Luo, Z.; Mowery, M. A.; Cheng, X.; Yang, Q.; Hu, J.; Andrade, M. C. B.
  year: 2022
  title: "Realized niche shift of an invasive widow spider: drivers and impacts of human activities"
  container: Frontiers in Zoology 19, 25
  doi: 10.1186/s12983-022-00470-z

miller2026b:
  authors: Miller, J.; Kratzer, C. A.; Griswold, C.
  year: 2026
  title: Description of a new Andean species of widow spider (Araneae, Theridiidae, Latrodectus)
  container: ZooKeys 1281 49–67
  doi: 10.3897/zookeys.1281.185973
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC13250612/
```

# Widows & Humans — research dossier

Researched 23 November 2026. Scope: BWM-07, `content/museum/humans/`; the three existing exhibits, all eight proposed subjects, and two further cases. Existing ids are preserved; new ids, titles, kickers and summaries are suggestions. This is a single-file research hand-off; neither exhibit YAML nor the source registry is edited.

## Reading this dossier

- Bracketed citation keys resolve to the **245 entries checked in `content/sources.yaml`** or the NEW entries in SOURCES below. Structure follows `research/genus-dossier.md` and `research/senses-dossier.md`. A source-registry entry is not itself verification: the claims below were checked against accessible original articles, publisher abstracts, indexed original-text passages, official documents, or explicitly identified historical syntheses.
- **established** = directly documented and secure as qualified; **supported** = a particular sample, experiment, retrospective attribution or interpretation; **debated** = an unresolved explanation or conflicting evidence. These labels attach to the qualified sentence, not to every widow species.
- **Taxa/populations studied** names the spiders and people or animals actually represented. US poison-centre records usually identify *Latrodectus* at genus level; they are not species-confirmed *L. mactans* bites. Australian redback data concern *L. hasselti*, often printed *hasseltii*. Historical uses of *L. mactans* and *L. mactans tredecimguttatus* are retained as historical identifications rather than silently reassigned.
- FIGURES are candidate fact cards, not illustrations. Counts of calls, reported exposures, diagnosed cases, expertly identified bites, trial participants and published case reports have different denominators. Neither a poison-centre series nor a collection of case reports measures population incidence without a suitable denominator.
- Clinical descriptions are museum interpretation, **not medical advice**. No patient doses, administration instructions or self-treatment protocols are supplied. Product information documents what a manufacturer describes; it does not override trial evidence. Historical treatments and deliberate bites are subjects of history, not demonstrations to repeat.
- Treatment-associated improvement in an uncontrolled series is not proof of efficacy. Natural recovery, other medicines, selection, diagnostic circularity and follow-up can affect the result. Laboratory neutralization, prevention of experimental poisoning and reversal of established human illness are different tests.
- Dates in fact cards distinguish the event, data-collection period and publication. Publication in 2026 does not make the underlying observations contemporary. Sources were checked through **23 November 2026**; no claim is made about subsequent events.

### Priority qualifications for the current exhibits

1. Retain the current zero-deaths card, explicitly attributed to the **2000–2008 US NPDS series**, and add the independent **2012–2022** series; neither supports a worldwide statement that widow bites never kill. [monte2011; kerns2025]
2. Describe severe pain and autonomic disturbance alongside the many localized or mild presentations; distinguish clinical severity grades from poison-centre outcome categories. [clark1992; isbister2003; kerns2025]
3. Present RAVE-I as a comparison of **routes**, RAVE-II as antivenom versus placebo **after standardized analgesia**, and the later US trial as a different product and endpoint. [isbister2008; isbister2014; dart2019]
4. Do not end the antivenom evidence story with the existing 2017 review: the US phase III trial received its full publication in **2019**. [ryan2017; dart2019]
5. Explain the widow name through sexual cannibalism without making it obligatory or universal; tarantism requires cultural history as well as toxicology. [eiden2013; andrade1996; russell1979; pizza2002]
6. Keep children and pregnancy visible without asserting that every child develops severe disease or that a small pregnancy series proves complete fetal safety. [trethewy2003; glatstein2018; wolfe2011]

## 1. humans.latrodectism — Latrodectism

**Suggested kicker:** A small wound can produce a whole-body syndrome.

**Suggested summary:** Widow envenomation can cause intense pain, muscle cramping and autonomic effects such as sweating. Severity and duration vary; a severe syndrome can resemble an abdominal emergency even when the skin lesion is modest. [ryan2017; clark1992; dzelalija2003]

**Taxa/populations studied:** *L. hasselti*, 68 expertly identified Australian bites; Arizona black-widow diagnoses attributed regionally to *L. hesperus*, 163 patients; *L. tredecimguttatus*, Croatian hospital cases; genus-level US poison-centre exposures. [isbister2003; clark1992; dzelalija2003; monte2011]

### FIGURES

| Value | Unit | Short label | Qualifier / locator | Sources |
|---|---|---|---|---|
| 42/68 (62%) | patients | Severe pain | Confirmed Australian redback cohort; Box 2 | [isbister2003] |
| 24/68 (35%) | patients | Systemic effects | Same cohort; Box 2 | [isbister2003] |
| 48 (24–96) | hours, median (IQR) | All effects | Same cohort; Results | [isbister2003] |
| 0 | reported deaths | A large US series | 23,409 reported exposures, 2000–2008; 9,872 symptomatic cases analyzed | [monte2011] |
| 2/32 | patients | Referred to surgery | Croatian series; diagnosis clarified before unnecessary laparotomy, Discussion | [dzelalija2003] |

### OBSERVATIONS

- Alpha-latrotoxin stimulates neurotransmitter release at presynaptic nerve terminals. **established — mechanism link to `venom.alpha-latrotoxin`** [ryan2017]
- Latrodectism combines muscular and autonomic symptoms. **established** [ryan2017]
- Regional limb pain is prominent in Australian redback reports. **supported — regional clinical pattern** [ryan2017]
- Grade 1: absent symptoms or local pain, normal vital signs. **established — Clark definition** [clark1992]
- Grade 2: regional pain, local sweating, normal vital signs. **established — Clark definition** [clark1992]
- Grade 3: generalized pain, remote sweating, abnormal vital signs. **established — Clark definition** [clark1992]
- Croatian patients with latrodectism were initially evaluated for acute abdominal disease. **supported** [dzelalija2003]
- Irritability, hypertension and sweating were common in hospitalized Central Australian children. **supported — selected paediatric population** [trethewy2003]
- A US pregnancy series documented no pregnancy losses during recorded follow-up. **supported — limited short-term evidence** [wolfe2011]
- Published European cases include serious cardiac complications. **supported — selected reports, not their population frequency** [terzi2026]

### TERMS

- **Latrodectism:** the clinical syndrome caused by widow-spider envenomation. [ryan2017]
- **Diaphoresis:** sweating, which may be localized, regional or generalized. [isbister2003]
- **Autonomic:** involving involuntary functions such as sweating, blood pressure and heart rate. [ryan2017]
- **Acute abdomen:** an abdominal presentation raising concern for an urgent underlying disorder. [dzelalija2003]

### Claims to avoid

- A universal clock: localized pain, regional spread and systemic illness do not occur on a fixed schedule in every species or patient. [isbister2003; ryan2017]
- “Venom eats the skin,” “every bite causes paralysis,” or equating a small lesion with mild illness. [clark1992; fusto2020]
- A mechanistic assertion that every aspect of prolonged pain has been explained by neurotransmitter release alone; the clinical linkage remains less complete than receptor and synapse biology. [ryan2017]
- Treating Clark's grade 3 as synonymous with the NPDS category “major effect.” [clark1992; kerns2025]
- Keep the detailed bite-site sequence in `humans.the-bite`, and children/pregnancy in section 12.

## 2. humans.antivenom — Antivenom

**Suggested kicker:** Antibodies, relief, and a difficult test of evidence.

**Suggested summary:** Horse-derived widow antivenoms have a long production history and remain part of regional clinical practice. Trials and observational series give different answers about pain relief, while product-specific allergic risks complicate the evidence. [ryan2017; isbister2014; dart2019; seqirus2026]

**Taxa/populations studied:** Australian *L. hasselti* envenomation; US black-widow syndromes, generally without species-confirmed assignments; experimental widow venoms and alpha-latrotoxin; manufacturing records from the US, Australia, Argentina and South Africa. [isbister2008; isbister2014; dart2013; dart2019; graudins2001; ministeriodesalud2025; nationalhealthlaboratoryservice2024]

### FIGURES

| Value | Unit | Short label | Qualifier / locator | Sources |
|---|---|---|---|---|
| 13 February 1936 | original US approval date | An early licensed widow antivenin | FDA Purple Book, Antivenin (Latrodectus mactans), BLA 101062; not a date of first antivenom experimentation worldwide | [foodanddrugadministration2026] |
| 1956 | year | Australian redback antivenom | CSL production milestone; museum catalogue, sponsor history and Wiener collection | [healy2013] |
| 126 | randomized patients | RAVE-I | 64 intravenous / 62 intramuscular; route comparison, without an untreated placebo group | [isbister2008] |
| 40/64 (62%) / 33/62 (53%) | pain responders | RAVE-I routes compared | IV / IM; primary outcome two hours after final treatment; difference +9 percentage points, 95% credible interval −8 to +26 | [isbister2008] |
| 224 | randomized patients | RAVE-II | 112 antivenom / 112 placebo; age >7 years; standardized analgesia in both groups | [isbister2014] |
| 38/112 (34%) / 26/112 (23%) | pain responders | RAVE-II at two hours | Antivenom / placebo; difference 10.7 percentage points, 95% CI −1.1 to 22.6; P=.10 | [isbister2014] |
| 4/112 (3.6%) | antivenom recipients | Acute systemic hypersensitivity | RAVE-II; do not relabel all four as anaphylactic shock | [isbister2014] |
| 24 | participants | Earlier US placebo trial | 13 antivenom / 11 placebo; primary pain-score change at 150 min did not differ significantly, P=.14 | [dart2013] |
| 60 | treated participants | Later US placebo trial | 29 purified equine F(ab′)₂ antivenom / 31 placebo, 16 sites; age ≥10 years | [dart2019] |
| 15/29 / 24/31 | treatment failures | Later US primary outcome | Antivenom / placebo; failure to achieve and maintain clinically significant pain reduction over 48 h; reported P=.019 | [dart2019] |
| 96 | antivenom-treated patients | California safety series | 1999–2009; urticaria in one, flushing in another; no severe allergic reactions identified | [nordt2012] |
| 1/58 | antivenom-treated patients | A serious historical adverse event | Arizona series: fatal bronchospasm after antivenin; not a generalizable reaction rate | [clark1992] |

### OBSERVATIONS

- The Australian product is prepared from plasma of horses immunized with female redback venom. **established — manufacturer description** [seqirus2026]
- US Merck antivenin and purified F(ab′)₂ trial products are distinct formulations. **established** [ryan2017; dart2019]
- RAVE-I found no large, clearly established advantage of one route over the other. **supported — Bayesian route comparison** [isbister2008]
- RAVE-II did not demonstrate significant additional two-hour pain relief from antivenom after analgesia. **supported — randomized trial** [isbister2014]
- RAVE-II also found no significant difference in its secondary outcomes. **supported — studied endpoints** [isbister2014]
- The smaller 2013 US trial found faster pain improvement on a secondary endpoint. **supported — primary endpoint nonsignificant** [dart2013]
- The later US trial reported fewer treatment failures with purified F(ab′)₂ antivenom. **supported — different product and endpoint** [dart2019]
- Clinical benefit depends on formulation, setting and endpoint. **debated — synthesis** [ryan2017; isbister2014; dart2019]
- Redback antivenom prevented experimental toxicity from other widow venoms in laboratory preparations and mice. **supported — preclinical neutralization** [graudins2001]
- Argentina's 2025 official bulletin describes an equine F(ab′)₂ *Latrodectus* antivenom manufactured by INPB. **established — dated manufacturing account** [ministeriodesalud2025]
- South Africa's NHLS identifies SAVP as its national manufacturer of spider antivenom. **established — 2023–2024 reporting period** [nationalhealthlaboratoryservice2024]
- The Australian label documents both acute allergic reactions and delayed serum sickness. **established — product-specific warnings** [seqirus2026]

### TERMS

- **Antivenom / antivenin:** antibodies intended to neutralize venom toxins; naming varies by product. [ryan2017]
- **Polyclonal:** containing antibodies produced by multiple antibody-producing cell lineages. [ryan2017]
- **F(ab′)₂:** an antibody fragment retaining two antigen-binding arms. [dart2019]
- **Serum sickness:** a delayed immune reaction to foreign proteins, distinct from immediate anaphylaxis. [seqirus2026]
- **Placebo-controlled:** comparing the intervention with an inactive comparator under a specified protocol. [isbister2014]

### Claims to avoid

- “RAVE proved all widow antivenoms useless” or “antivenom is proven to work equally for every species.” [isbister2014; dart2019; graudins2001]
- A nonsignificant difference is not proof of identical outcomes; retain the confidence interval. [isbister2014]
- Laboratory cross-neutralization does not establish equivalent clinical benefit after established envenomation. [graudins2001]
- The 2017 review's critique of a **2016 conference abstract** is not a review of the full 2019 paper; explain the chronology. [ryan2017; dart2019]
- Do not describe a clinical trial formulation as universally licensed, stocked or available today. [dart2019]
- Do not pool allergic-event percentages across products, countries, surveillance methods or eras. [clark1992; nordt2012; isbister2014]
- A manufacturer label is not a contemporary systematic review: the checked Australian label's clinical-trials subsection says no data available despite published RAVE trials. [seqirus2026; isbister2008; isbister2014]

## 3. humans.myth — The Widow in Myth

**Suggested kicker:** A name can outgrow the animal.

**Suggested summary:** The widow name connects these spiders with sexual cannibalism, a variable biological behaviour. Mediterranean tarantism adds another history: real pain, attributed spider bites, ritual music and culturally patterned explanations that cannot be reduced to one venom. [eiden2013; andrade1996; russell1979; pizza2002]

**Taxa/populations studied:** *L. mactans* in the naming account; Australian *L. hasselti* mating observations; *L. tredecimguttatus* as a proposed explanation of some historical Mediterranean illnesses; Apulian and Spanish tarantism traditions. *Lycosa tarantula* is a wolf-spider comparator, not a widow. [eiden2013; andrade1996; russell1979; corralcorral2016]

### FIGURES

| Value | Unit | Short label | Qualifier / locator | Sources |
|---|---|---|---|---|
| 11/17 | observed matings | Cannibalism in one field sample | *L. hasselti*, Perth; real behaviour, not obligatory death of every male | [andrade1996] |
| 15th–18th | centuries | Recorded tarantism outbreaks | Russell's historical synthesis, especially southern Italy; not confirmed widow-bite surveillance | [russell1979] |
| 1782 | year | Spanish tarantism epidemic | Historical cases reinterpreted by Corral-Corral and Corral-Corral | [corralcorral2016] |
| 1959 | fieldwork year | Studying Apulian tarantism | Ernesto de Martino's interdisciplinary Salento investigation | [pizza2002] |
| 1961 | publication year | A landmark ethnography | *La terra del rimorso*, arising from the 1959 work | [pizza2002] |

### OBSERVATIONS

- The common name refers to the belief that females kill and consume their mates. **established — naming explanation** [eiden2013]
- Sexual cannibalism occurred in Andrade's field observations of redbacks. **supported — L. hasselti** [andrade1996]
- Surviving males also occurred in that same sample. **supported — L. hasselti** [andrade1996]
- Tarantism traditionally linked an attributed spider bite with illness and musical dancing. **established — historical belief** [russell1979]
- Apulia was a central setting for the musical healing tradition. **established — cultural history** [russell1979]
- Historical use of “tarantula” did not reliably identify a spider species. **established — historical terminology** [russell1979; corralcorral2016]
- Some Spanish historical symptoms have been interpreted as Mediterranean widow envenomation. **supported — retrospective interpretation** [corralcorral2016]
- Whether widow bites explain particular undocumented tarantism episodes cannot be established retrospectively. **debated — attribution** [russell1979; corralcorral2016]
- Apulian tarantism was studied as a culturally organized response to suffering. **established — anthropological subject** [pizza2002]
- Later Salento revivals transformed tarantism into a public cultural and heritage practice. **supported — ethnographic analysis** [pizza2002]

### TERMS

- **Tarantism:** a historically and culturally specific illness-and-ritual complex attributed to a spider bite. [russell1979; pizza2002]
- **Tarantella:** a name used for the music and associated dance. [russell1979]
- **Sexual cannibalism:** one mating partner consumes the other; frequency and timing require species-specific evidence. [andrade1996]
- **Retrospective diagnosis:** an interpretation of old descriptions rather than examination of the original patient and spider. [corralcorral2016]

### Claims to avoid

- “The tarantella neutralizes venom,” “every tarantism episode was latrodectism,” or “all sufferers were pretending.” [russell1979; pizza2002; corralcorral2016]
- Repeating older medical authors' terminology of “hysteria” as a complete modern explanation or a dismissive label for participants. [russell1979; pizza2002]
- Claiming a verified first coinage of “black widow” from a modern naming explanation alone. [eiden2013]
- Importing general Arachne mythology into widow-specific biology without a traceable historical connection.
- Keep mating mechanics in the Life vault; contemporary media and diagnostic misconceptions belong in `humans.fear`.

## 4. humans.who-gets-bitten — Who Gets Bitten?

**Suggested kicker:** Exposure follows seasons, work and everyday contact.

**Suggested summary:** Poison-centre and hospital series reveal seasonal and demographic patterns, but their case definitions differ. US reported exposures, confirmed Australian redback bites and European records describe different populations rather than one global risk profile. [monte2011; kerns2025; sutherland1978; leroux2022]

**Taxa/populations studied:** Genus-level US NPDS records, 2000–2008 and 2012–2022; Australian/New Zealand redback reports, 1963–1976; confirmed Australian *L. hasselti* bites; French poison-centre reports of native spiders, including *Latrodectus*; Croatian *L. tredecimguttatus* diagnoses. [monte2011; kerns2025; sutherland1978; isbister2003; leroux2022; dzelalija2003]

### FIGURES

| Value | Unit | Short label | Qualifier / locator | Sources |
|---|---|---|---|---|
| 23,409 / 9,872 | reported exposures / symptomatic cases | Earlier US dataset | NPDS, 2000–2008; 47 states; the latter subset entered symptomatic analysis | [monte2011] |
| 58 | % male | Earlier US symptomatic sample | Mean age 31.5 years, SD 17.4; not all reported exposures | [monte2011] |
| 15,299 | reported exposures | Later US dataset | NPDS, 2012–2022; Table 1 | [kerns2025] |
| 8,471 (55.4%) | reported male patients | Later US demographic pattern | Same dataset; sex unknown in 24 cases | [kerns2025] |
| 2,144 | reported redback cases | Historical Australasian series | Australia/New Zealand, 1963–1976; manufacturer-linked reporting strongly selected for antivenom recipients | [sutherland1978] |
| 74 | % of bites | Extremities in the historical redback series | Same series; 64.4% male and 79% aged 18–50 | [sutherland1978] |
| 19/68 (28%) | patients | Putting on shoes | Confirmed redbacks; Box 2 | [isbister2003] |
| 46/1,194 (3.9%) | attributed cases / all included reports | Latrodectus in French records | 2007–2018 native-spider PCC study; not 46 uniformly expert-confirmed widow bites | [leroux2022] |
| 17/32 | patients | July in a Croatian hospital series | All incidents fell June–September; Results abstract | [dzelalija2003] |

### OBSERVATIONS

- Both US NPDS studies found a September peak in reported exposures. **supported — repeated surveillance pattern** [monte2011; kerns2025]
- Winter months had the lowest US reporting frequency. **supported** [monte2011; kerns2025]
- Men comprised a majority in both US datasets. **supported — recorded case mix** [monte2011; kerns2025]
- Historical redback reports clustered in summer and afternoon or evening. **supported — selected Australia/New Zealand cases** [sutherland1978]
- Genital or buttock bites accounted for 9.7% of the historical redback series. **supported — historical body-site category** [sutherland1978]
- Clothing and shoes were recorded bite circumstances in the Arizona hospital series. **supported** [clark1992]
- French records distinguished attributed species from proven bites. **established — surveillance methodology** [leroux2022]
- The European systematic review mainly located published cases in Mediterranean agricultural regions during summer. **supported — publication-based sample** [terzi2026]
- Two confirmed Malaysian brown-widow bites occurred while men put on motorcycle helmets. **supported — L. geometricus case reports** [mokhtar2021]

### TERMS

- **Exposure:** a reported contact event, not necessarily a verified bite or envenomation. [kerns2025]
- **Case series:** a described group of patients without a population comparison denominator. [clark1992]
- **Incidence:** new cases relative to a population and time interval; report totals alone are insufficient. [monte2011; leroux2022]

### Claims to avoid

- “Men are biologically more susceptible,” inferred from occupational or reporting patterns. [monte2011; sutherland1978]
- Dividing hospital cases by a country's population and calling the result the true bite incidence.
- Treating all French spider reports, or all European agricultural bites, as widow bites. [leroux2022; terzi2026]
- Giving a numerical frequency for bites from gloves: protective-glove advice is not a quantified glove-bite series. [eiden2013]
- Turning historical outdoor-toilet accounts into a present-day majority circumstance; see home and historical-source notes. [chamberlin1935; sutherland1978]

## 5. humans.the-bite — The Bite Itself

**Suggested kicker:** The skin may tell only part of the story.

**Suggested summary:** A widow bite may leave redness, focal sweating or a pale-centred target-like mark, while visible fang punctures can be absent. Increasing or spreading pain is often more informative than the size of the wound. [isbister2003; fusto2020; clark1992]

**Taxa/populations studied:** Expert-confirmed Australian *L. hasselti* bites; Arizona diagnoses regionally attributed to *L. hesperus*; Mediterranean *L. tredecimguttatus* clinical literature. [isbister2003; clark1992; fusto2020]

### FIGURES

| Value | Unit | Short label | Qualifier / locator | Sources |
|---|---|---|---|---|
| 50/68 (74%) | patients | Redness | Confirmed redbacks; Box 2 | [isbister2003] |
| 23/68 (34%) | patients | Local/regional sweating | Same cohort | [isbister2003] |
| 5/68 (7%) / 4/68 (6%) | patients | Swelling / punctures | Same cohort | [isbister2003] |
| 37/68 (54%) | patients | Increasing first-hour pain | Same cohort | [isbister2003] |
| 15–60 | minutes after bite | Regional-pain onset described in a Mediterranean review | Literature summary, not a universal latency or validated diagnostic cutoff | [fusto2020] |

### OBSERVATIONS

- Sweating can be localized or regional. **supported — redbacks** [isbister2003]
- Punctures were uncommon. **supported — redbacks** [isbister2003]
- Redness exceeded swelling. **supported — redbacks** [isbister2003]
- First-hour pain could increase. **supported — redbacks** [isbister2003]
- A Mediterranean review describes a pale centre with an erythematous halo. **established — reported clinical pattern** [fusto2020]
- Clark illustrated a central punctum, surrounding blanching and an outer red ring. **established — Figure 1** [clark1992]
- Local pain can spread beyond the bite site. **established — regional clinical pattern** [fusto2020]
- A substantial destructive skin wound is not the defining feature of latrodectism. **established — syndrome distinction** [fusto2020]

### TERMS

- **Erythema:** visible skin redness. [fusto2020]
- **Blanching:** a pale area caused by reduced visible blood in superficial skin vessels. [clark1992]
- **Target lesion:** a descriptive concentric appearance, not a species-identification test. [clark1992; fusto2020]
- **Punctum:** a small point-like mark at the injury site. [clark1992]

### Claims to avoid

- An obligatory pair of punctures, a diagnostic photograph checklist, or “no fang marks means no bite.” [isbister2003]
- Confusing a widow target lesion with the evolving necrotic lesion of a recluse bite. [fusto2020]
- Estimating diagnostic sensitivity from Clark's target-lesion frequency: entry partly depended on that sign. [clark1992]
- Applying Mediterranean onset intervals to every Australian or American bite. [fusto2020]
- Inferring the injected venom quantity from lesion size alone. [fusto2020; nelsen2014]

## 6. humans.self-experimenters — The People Who Offered a Finger

**Suggested kicker:** A laboratory notebook became a record of pain.

**Suggested summary:** William J. Baerg and Allan W. Blair deliberately provoked widow bites to investigate human toxicity. Their accounts belong to the history of evidence and self-experimentation; they cannot establish a typical dose, risk or human immunity. [baerg1923; blair1934; dry2026; healy2013]

**Taxa/populations studied:** Two individual adult male self-experimenters in the United States; spiders published as *L. mactans* under historical usage. Baerg's symptom sequence is supported here by an institutional historical account; Blair's original publication and the museum history establish his experiment and its purpose. [baerg1923; blair1934; dry2026; healy2013]

### FIGURES

| Value | Unit | Short label | Qualifier / locator | Sources |
|---|---|---|---|---|
| 1922 | experiment year | Baerg's self-experiment | Historical chronology; distinguish from March 1923 publication | [dry2026; baerg1923] |
| 2 | consecutive days with self-tests | A mild first experience, then a severe one | Institutional biography describes an initial superficial bite and repetition the following day | [dry2026] |
| 5 | seconds | Reported attachment in the second Baerg test | Historical account; not a known venom dose | [dry2026] |
| 3 | days of symptom recording | Baerg's record | Institutional biography's account of the published experience | [dry2026] |
| 1933 / 1934 | experiment / publication years | Blair's experiment and report | Museum history / original publisher record | [healy2013; blair1934] |

### OBSERVATIONS

- Baerg used himself as a subject in widow-venom research. **established — documented historical experiment** [baerg1923; dry2026]
- His first reported self-test caused only slight sharp pain. **supported — institutional historical account** [dry2026]
- The repeat test produced much more severe symptoms. **supported — same account** [dry2026]
- Baerg described pain spreading toward his shoulder, chest and hips. **supported — historical symptom record** [dry2026]
- He recorded difficulty with breathing and speech. **supported — historical symptom record** [dry2026]
- Blair deliberately induced a black-widow bite in Alabama in 1933. **established — museum history linked to original publication** [healy2013; blair1934]
- Blair's paper framed his work against skepticism about reported human poisoning. **established — accessible original introduction** [blair1934]
- Blair's report was published in the December 1934 issue of *Archives of Internal Medicine*. **established — publisher record** [blair1934]

### TERMS

- **Self-experimentation:** an investigator acts as the human experimental subject. [healy2013]
- **Single-subject account:** observations of one person, with limited ability to establish general frequencies. [baerg1923; blair1934]
- **Historical identification:** the name used by the original author, potentially broader than current species boundaries. [baerg1923; kaston1970]

### Claims to avoid

- “The first human widow bite ever studied”: centuries of clinical reports preceded these experiments. [blair1934]
- An exact injected dose inferred from five seconds of attachment. [dry2026; nelsen2014]
- Claiming Baerg's first mild experience proves immunity or a later severe experience proves a fixed dose-response relationship. [dry2026]
- Additional minute-by-minute Blair symptoms, his precise bite date, or immunity-test anecdotes without checking his complete original text; access was incomplete here.
- Adding William Harvey, tarantula self-tests or jellyfish self-stings to the list of verified **widow** self-experiments. [healy2013]
- Further named widow self-experimenters were not verified to the required standard in this pass; do not fill the list with unattributed retellings.

## 7. humans.history — A History of Latrodectism

**Suggested kicker:** Old accounts, new names, unequal records.

**Suggested summary:** Widow poisoning has been described across pastoral and agricultural societies, but historical diagnoses and mortality estimates are difficult to compare. Regional series reveal real morbidity while exposing the limits of old species names, selected hospital samples and incomplete reporting. [chamberlin1935; schenone2003; ramialiharisoa1994; terzi2026]

**Taxa/populations studied:** Historical karakurt and Mediterranean accounts; South African *L. indistinctus* and *L. geometricus*; Madagascar cases with only two identified spiders; Chilean clinical history; Peruvian official accounts using *L. mactans* broadly; European published cases and US poison-centre comparisons. [chamberlin1935; muller1993; ramialiharisoa1994; schenone2003; ministeriodesalud2005; terzi2026; monte2011]

### FIGURES

| Value | Unit | Short label | Qualifier / locator | Sources |
|---|---|---|---|---|
| 1888 / 22 | year / Russian cases cited | A historical Russian case collection | Chamberlin and Ivie p. 8 summarize an earlier report; not newly verified patient records | [chamberlin1935] |
| >150 | diagnosed cases | A Chilean summer outbreak | Regions VII–IX, summer 1983–1984, reported in Schenone's clinical review; no modern species reassignment | [schenone2003] |
| 45 = 30 + 15 | patients | South African species comparison | Tygerberg referrals, summers 1987/88–1991/92; black / brown widow groups | [muller1993] |
| 10 / 2 | patients / identified spiders | Madagascar's ICU series | March 1991–July 1992; both identified spiders were female *L. geometricus* | [ramialiharisoa1994] |
| 1/10 | reported fatal outcomes | A selected Madagascar series | Cardiovascular failure; do not calculate a national or genus-wide fatality rate | [ramialiharisoa1994] |
| 36 / ≈500 | publications / reported envenomations | European literature, 1973–2025 | Systematic review includes confirmed **and presumed** cases | [terzi2026] |
| ≈1.3 | % reported case fatality | The European review's estimate | Selected published cases; abstract does not supply an exact reconciled denominator; not population risk | [terzi2026] |

### OBSERVATIONS

- Historical accounts connected karakurt poisoning with people and livestock in southern Russia. **supported — historical synthesis** [chamberlin1935]
- The same synthesis relayed deaths of horses, camels and cattle. **supported — reports of animal poisoning** [chamberlin1935]
- Chilean literature describes outbreak conditions associated with agricultural activity in summer. **supported — clinical history** [schenone2003]
- Schenone's review includes Uruguay among countries with historical outbreak reports. **supported — secondary historical attribution** [schenone2003]
- South African black-widow cases were more severe than brown-widow cases in Müller's series. **supported — L. indistinctus versus L. geometricus** [muller1993]
- The Madagascar series included hypertension and kidney dysfunction. **supported — selected ICU patients** [ramialiharisoa1994]
- The fatal Madagascar case cannot be assigned to brown widows merely because two other spiders were identified. **established — identification limit** [ramialiharisoa1994]
- Peru's official account describes latrodectism as predominantly rural and less frequent than loxoscelism. **supported — national technical account** [ministeriodesalud2005]
- The Peruvian document explicitly recognizes underreporting and inadequate national quantification. **established — stated surveillance limit** [ministeriodesalud2005]
- Modern US poison-centre series recorded no deaths in their specified periods. **supported — national reporting systems** [monte2011; kerns2025]

### TERMS

- **Karakurt:** a regional common name historically used for widow spiders; not sufficient for retrospective species identification. [chamberlin1935]
- **Case fatality:** deaths among a defined set of cases, strongly dependent on how cases were selected. [terzi2026]
- **Underreporting:** cases absent from the reporting system. [ministeriodesalud2005]
- **Outbreak:** an unusual concentration of cases in place and time, not evidence of contagious transmission. [schenone2003]

### Claims to avoid

- Universal pre-antivenom death rates of 4%, 5%, 8% or 12% without an original population, denominator and diagnostic standard.
- Extrapolating the Madagascar ICU experience to all bites, all brown widows or present-day Madagascar. [ramialiharisoa1994]
- Presenting the European review's approximate fatality estimate as a prospective risk to a bitten visitor. [terzi2026]
- An invented numerical outbreak total for Central Asia, Peru or Uruguay: this pass did not verify one to a sufficient standard.
- Silently renaming all Peruvian, Chilean, Russian or Malagasy historical “mactans” records as one present-day species. [kaston1970; wsc2026]
- Treating an old author saying sheep or pigs are immune as controlled evidence of absolute immunity. [chamberlin1935]

## 8. humans.other-animals — Widows and Other Animals

**Suggested kicker:** The same venom meets different nervous systems.

**Suggested summary:** Widow poisoning is described in companion animals and livestock, and experimental sensitivity differs between animal models. Veterinary evidence is much thinner than human surveillance, making diagnosis and cross-species extrapolation especially important. [nagy2026; hardy2014; twedt1999]

**Taxa/populations studied:** Veterinary *Latrodectus* diagnoses in dogs, cats and livestock; a US feline case; historical livestock accounts; laboratory *L. tredecimguttatus* crude-venom toxicity values summarized in a veterinary review. Spider species and experimental routes are not uniformly resolved. [nagy2026; twedt1999; chamberlin1935; hardy2014]

### FIGURES

| Value | Unit | Short label | Qualifier / locator | Sources |
|---|---|---|---|---|
| 1 | published feline case | A documented veterinary report | Twedt et al., Colorado State University, 1999; a case report, not a cohort or incidence estimate | [twedt1999] |
| 20/22 | cats reported to have died | An older experimental record | Quoted in Hardy et al.'s 2014 review; original experiment not recovered here; not pet-bite prognosis | [hardy2014] |
| 0.0075 | mg/kg, reported LD₅₀ | Guinea-pig model | *L. tredecimguttatus* crude venom, value relayed by veterinary review; route and protocol not resolved here | [hardy2014] |
| 0.9 | mg/kg, reported LD₅₀ | Mouse model | Same review; do not assume a matched experiment or calculate a sensitivity ratio | [hardy2014] |
| 1–2 | hours | Muscle signs after animal envenomation | Veterinary manual's general description; variable onset, not a species-specific median | [nagy2026] |

### OBSERVATIONS

- The veterinary manual identifies dogs and cats as the most commonly reported veterinary patients. **supported — clinical synthesis** [nagy2026]
- Cats are considered particularly susceptible to widow envenomation. **supported — veterinary evidence** [nagy2026; hardy2014]
- Dogs can develop tremors, pain and vomiting. **established — veterinary description** [nagy2026]
- Severe animal cases include respiratory distress or weakness. **established** [nagy2026]
- A bite site may be difficult to locate in a veterinary patient. **established — diagnostic limitation** [nagy2026]
- The manual describes horses and guinea pigs as susceptible despite some canid resistance. **supported — qualitative comparison** [nagy2026]
- Historical literature reports livestock poisoning in southern Russia, Spain and Chile. **supported — veterinary historical synthesis** [nagy2026]
- The published feline case establishes that clinical widow poisoning has been investigated in cats. **established — case-report record** [twedt1999]
- Reported experimental lethality values differ between guinea pigs and mice. **supported — review-level values with unresolved protocols** [hardy2014]

### TERMS

- **LD₅₀:** an experimental dose lethal to half the tested animals under a specified protocol. [hardy2014]
- **Paresis:** partial weakness or loss of movement. [nagy2026]
- **Fasciculation:** a small involuntary muscle contraction. [nagy2026]
- **Species sensitivity:** a response dependent on the recipient animal as well as venom preparation and exposure. [hardy2014]

### Claims to avoid

- A pet survival percentage from the historical 20/22 experimental-cat figure. [hardy2014]
- “Dogs are immune,” “all cats die,” or a numerical horse-versus-human susceptibility ranking. [nagy2026]
- Calling mice rats: the recovered veterinary review specifies **mice** for the 0.9 mg/kg value. [hardy2014]
- A guinea-pig-versus-rat figure or a calculated 120-fold comparison from unmatched review values; no adequately specified matched protocol was verified.
- Accepting every suspected animal spider bite as *Latrodectus*, or confusing tissue-destructive recluse syndromes with widow neurotoxicity. [nagy2026]
- The manual's widow-treatment paragraph unexpectedly discusses **Loxosceles** antivenoms; that passage is not used as evidence for widow-antivenom availability. [nagy2026]

## 9. humans.stowaways — Stowaways

**Suggested kicker:** A bunch of grapes can carry more than fruit.

**Suggested summary:** Widows travel as accidental passengers in produce, vehicles and freight. Biosecurity records document genuine interceptions, while laboratory postharvest work tests ways to address a trade pathway without confusing arrival with establishment. [reed2002; noordijk2016; liu2008]

**Taxa/populations studied:** New Zealand records of spiders associated with table grapes from California, Australia, Mexico and Chile; Dutch imports of *L. hesperus*, *L. hasselti* and *L. geometricus*; laboratory *L. hesperus* on harvested US table grapes. Historical interception identifications are preserved as recorded. [reed2002; noordijk2016; liu2008]

### FIGURES

| Value | Unit | Short label | Qualifier / locator | Sources |
|---|---|---|---|---|
| 12 June 2002 | assessment date | Investigating the grape pathway | New Zealand MAF risk assessment; multiple spider taxa and source countries | [reed2002] |
| 14 | documented import records | Dutch widow records by 2016 | Noordijk's synthesis: ten earlier records plus four additions | [noordijk2016] |
| 6/14 | import records | Vehicles as a pathway | Dutch report p. 21; includes older vehicles; not all European imports | [noordijk2016] |
| 3 | female redbacks | A freight-container record | Australian torpedo parts, Netherlands, 2014; a nursery accompanied one female | [noordijk2016] |
| 54/54 | spiders killed in a test | A postharvest laboratory result | *L. hesperus*, 24 h, 0.5% oxygen at 1°C, Liu Table 1; apparatus conditions, not household instructions | [liu2008] |
| 2 | grape cultivars | Checking fruit quality | Thompson Seedless and Flame Seedless; no adverse quality effect detected under tested conditions | [liu2008] |

### OBSERVATIONS

- New Zealand's 2002 assessment documents *Latrodectus* among grape-associated interceptions. **established — official records** [reed2002]
- Recorded grape passengers included redbacks and western black widows. **established — historical identification records** [reed2002]
- Some records were post-border discoveries rather than detections at inspection. **established — official record categories** [reed2002]
- An interception record establishes arrival, not an established breeding population. **established — evidential distinction** [reed2002; noordijk2016]
- Dutch records include imports with vehicles, plants and industrial goods. **established — documented pathways** [noordijk2016]
- Redback eggs hatched in an intercepted Dutch setting. **supported — local reproduction record** [noordijk2016]
- The 2008 grape experiment found mortality depended on oxygen concentration and temperature. **supported — L. hesperus laboratory study** [liu2008]
- Grapes serve as shelter and hunting habitat rather than food for widows. **established — official pathway description** [ministryforprimaryindustries2022]
- A 2026 New Zealand grape import standard explicitly lists several widow species. **established — dated official standard** [ministryforprimaryindustries2026]

### TERMS

- **Interception:** discovery of an organism associated with imported material. [reed2002]
- **Post-border detection:** discovery after the consignment has passed the border. [reed2002]
- **Establishment:** persistence through reproduction beyond a transient arrival. [noordijk2016]
- **Contaminating pest:** a passenger associated with a commodity without feeding on that commodity. [ministryforprimaryindustries2022]

### Claims to avoid

- “All grape spiders are widows” or transferring all-spider interception totals to *Latrodectus*. [reed2002]
- Automatically accepting old Californian *L. mactans* records as modern species-confirmed identifications; preserve the record's original name and uncertainty. [reed2002; kaston1970]
- “One egg sac means invasion,” or treating a 2016 Dutch establishment assessment as a verified 2026 climatic limit. [noordijk2016]
- Using a biosecurity assessment's alarming historical human-mortality claim as clinical evidence: the 2022 proposal repeats such figures, which are not adopted here. [ministryforprimaryindustries2022]
- Turning an experimental low-oxygen protocol into an approved commercial schedule; the experiment and the 2026 regulatory document serve different purposes. [liu2008; ministryforprimaryindustries2026]

## 10. humans.fear — Widows and Fear

**Suggested kicker:** Count the evidence behind the headline.

**Suggested summary:** Widows can cause real illness, yet fear, media framing and uncertain diagnoses can inflate perceived risk. Research on news coverage and alleged spider bites offers a way to examine the story as carefully as the spider. [mammola2022; mammola2022b; suchard2011]

**Taxa/populations studied:** Global news coverage of many spider taxa, including widows; Southern Californian emergency patients attributing conditions to spider bites; French native-spider poison-centre reports; OTHER SPIDERS in arachnophobia experiments, not widow-specific fear measurements. [mammola2022; suchard2011; leroux2022; vasey2012; li2021]

### FIGURES

| Value | Unit | Short label | Qualifier / locator | Sources |
|---|---|---|---|---|
| 5,348 | unique news articles | Measuring spider news | Database covering 2010–2020; encounters as well as alleged bites | [mammola2022] |
| 81 / 40 | countries / languages | A broad media sample | Same database; uneven geographic and temporal coverage | [mammola2022] |
| 47 / 43 | % of articles | Errors / sensationalism | Expert coding; all-spider dataset, not widow-only or independently verified deaths | [mammola2022b] |
| 156/182 (85.7%) | patients | Diagnosed with infection | Suchard's ED study, 2006–2007; four patients had dual diagnoses | [suchard2011] |
| 7/182 (3.8%) | patients | Clinically diagnosed spider bites | Same study; distinguish clinical confirmation from expert identification of every spider | [suchard2011] |
| 242/1,194 (20%) | reported cases | Bites considered proven | French PCC native-spider study; all spiders, not widow confirmation rate | [leroux2022] |
| 57 | participants | Fear and size estimation | Diagnosed spider-phobic sample, mostly young adults; tarantulas used | [vasey2012] |

### OBSERVATIONS

- The global news database includes encounters without bites. **established — dataset scope** [mammola2022]
- Experts identified factual errors in nearly half its articles. **supported — content analysis** [mammola2022b]
- Sensationalism was scored separately from factual errors. **established — coding distinction** [mammola2022; mammola2022b]
- Media stories of fatal bites are reports to investigate, not verified mortality records. **established — database limitation** [mammola2022]
- Most patients in Suchard's alleged-bite study received infection diagnoses. **supported — local ED population** [suchard2011]
- Where spiders could be identified in Suchard's clinically diagnosed bite cases, they were black widows. **supported — qualified identification** [suchard2011]
- French reports often lacked enough information to establish a proven bite. **supported — PCC surveillance** [leroux2022]
- Fear during live tarantula encounters correlated with larger subsequent size estimates in one phobic sample. **supported — OTHER SPIDERS** [vasey2012]
- A later study found phobic participants accurately estimated size after viewing a live spider. **supported — task-dependent result, OTHER SPIDERS** [li2021]
- The role of perception, memory and task design in spider-size bias remains more complex than a universal exaggeration rule. **debated — synthesis of experiments** [vasey2012; li2021]

### TERMS

- **Arachnophobia:** a clinically significant specific fear of spiders; not synonymous with ordinary caution. [vasey2012]
- **Attribution:** assigning a lesion or illness to a spider, with or without confirmation. [suchard2011]
- **Sensationalism:** exaggerated or emotionally loaded framing as defined by the media study's coding. [mammola2022b]
- **Confirmation standard:** the evidence needed to classify a reported bite as proven. [leroux2022]

### Claims to avoid

- “96% of widow bites are imaginary”: Suchard enrolled people reporting **spider** bites, not confirmed widow patients. [suchard2011]
- “85.7% had MRSA”; the number concerns infection diagnoses generally, not one cultured organism. [suchard2011]
- “47% of widow news is false”: the dataset spans spiders and counts errors of different kinds. [mammola2022b]
- Treating a news-content association as proof that a headline caused an individual's phobia. [mammola2022b]
- A universal prevalence of widow-specific phobia, or an assertion that arachnophobia is exclusively innate or exclusively learned; neither was established here.
- Dismissing severe, clinically supported latrodectism because many unrelated skin lesions are misattributed. [suchard2011; isbister2003]

## 11. humans.at-home — Widows in the Home

**Suggested kicker:** Shelter brings spiders and people together.

**Suggested summary:** Widows use protected spaces in human environments, including outdoor furniture, outbuildings and stored objects. Field surveys, defensive-behaviour experiments and egg-sac studies explain encounters and the limits of simple control claims. [vetter2012b; vetter2017; nelsen2014; vetter2016b]

**Taxa/populations studied:** *L. geometricus* and *L. hesperus* in urban southern California; female *L. hesperus* in laboratory defensive trials; *L. geometricus* egg sacs in pesticide-penetration experiments; historical US toilet accounts and Australian redback shelter records. [vetter2012b; nelsen2014; vetter2016b; chamberlin1935; australianmuseum2026]

### FIGURES

| Value | Unit | Short label | Qualifier / locator | Sources |
|---|---|---|---|---|
| 13,788/15,299 (90.1%) | reported US exposures | At the person's own residence | NPDS, 2012–2022; residence includes the residential setting, not necessarily inside occupied rooms | [kerns2025] |
| 43 | adult female spiders | Testing defensive responses | *L. hesperus*, gelatin-finger threat experiment 1 | [nelsen2014] |
| 20 | adult female spiders | Measuring defensive venom use | *L. hesperus*, parafilm-covered targets, experiment 2 | [nelsen2014] |
| 53.7 | % of single bites | No measurable venom | Experiment 2; assay-limited laboratory target result, not the human dry-bite rate | [nelsen2014] |
| 6 / 4 | tested formulations | Water-based sprays / oil-based aerosols | Brown-widow egg-sac laboratory study | [vetter2016b] |
| 94–100 | % prevention of spiderling emergence | Oil-based aerosol results | Directly treated *L. geometricus* sacs under laboratory conditions; not household field effectiveness | [vetter2016b] |

### OBSERVATIONS

- Southern Californian brown widows were common around exterior urban structures. **supported — timed field searches** [vetter2012b]
- Surveyed sites included playground equipment, plant nurseries and landscaping. **supported — same study** [vetter2012b]
- Brown widows were scarce or absent in sampled undeveloped habitats. **supported — regional survey** [vetter2012b]
- UC's account describes western widows around barns, outbuildings, rock walls and clutter. **established — regional natural history** [vetter2017]
- Historical US authors described bites associated with outdoor toilets. **supported — historical accounts** [chamberlin1935]
- Low-threat prodding primarily elicited avoidance in the western-widow experiment. **supported** [nelsen2014]
- Pinching elicited more biting than lower-threat stimulation. **supported — experimental threat comparison** [nelsen2014]
- Western widows varied venom expenditure during defensive biting. **supported — artificial targets** [nelsen2014]
- Most tested water-based formulations did not significantly prevent brown-widow emergence. **supported — five of six formulations** [vetter2016b]
- Oil-based products penetrated the egg-sac silk more effectively in that experiment. **supported — L. geometricus** [vetter2016b]
- UC's management account emphasizes removal of spiders, webs, sacs and shelter. **established — extension approach, not a quantified bite-reduction trial** [vetter2017]

### TERMS

- **Synanthropic:** using environments associated with people. [vetter2012b]
- **Venom metering:** variation in whether or how much venom is expended. [nelsen2014]
- **Dry bite:** a bite delivering no detectable or functionally significant venom under the stated assay. [nelsen2014]
- **Emergence:** spiderlings leaving an egg sac; a different endpoint from disappearance of adult spiders. [vetter2016b]

### Claims to avoid

- Equating residence exposure with deliberate spider entry into beds or occupied indoor rooms. [kerns2025]
- “Widows attack people”: the controlled experiment found graded defensive responses to threat. [nelsen2014]
- Reporting 53.7% as the fraction of human bites that inject no venom. [nelsen2014]
- A universal pesticide recommendation, current product endorsement, application rate or home-treatment instruction from an old laboratory experiment. [vetter2016b; vetter2017]
- Claiming all water-based products fail: the primary paper reports an exception. [vetter2016b]
- Claiming a measured percentage reduction in human bites from tidying, gloves or web removal; no such controlled outcome was verified here.

## 12. humans.children-and-pregnancy — Small Patients, Uncertain Assumptions

**Suggested kicker:** A special population needs its own evidence.

**Suggested summary:** Children can present with irritability and sweating rather than a clear bite history, and selected paediatric hospital series contain substantial systemic illness. Pregnancy reports are comparatively reassuring about recorded short-term outcomes, but long-term and species-specific evidence remains limited. [trethewy2003; glatstein2018; wolfe2011]

**Taxa/populations studied:** Australian redback discharge diagnoses in children aged up to 12 years; US paediatric black-widow exposures reported to Rocky Mountain Poison Center; US NPDS pregnancy reports without reliably resolved widow species. [trethewy2003; glatstein2018; wolfe2011]

### FIGURES

| Value | Unit | Short label | Qualifier / locator | Sources |
|---|---|---|---|---|
| 54 | children | Central Australian redback series | Alice Springs Hospital, January 1992–June 2001; retrospective discharge diagnoses | [trethewy2003] |
| 46/54 (85%) | children | Systemic envenomation | Same selected hospital series; not all community bites | [trethewy2003] |
| 35/54 (65%) | children | Irritability, hypertension and sweating together | Same series; Results | [trethewy2003] |
| 93 | paediatric exposures | US poison-centre series | January 2012–December 2015; 40 community-origin calls / 53 healthcare-origin calls | [glatstein2018] |
| 43 / 16 / 34 | patients | Clinical grades 1 / 2 / 3 | 46.2% / 17.2% / 36.5%; clinical grading, not NPDS outcome labels | [glatstein2018] |
| 97 | pregnant patients | US pregnancy series | 2003–2007; among 3,194 women aged 15–45 and 12,640 total human reports | [wolfe2011] |
| 0 | documented pregnancy losses | Recorded short-term outcome | Same retrospective series; absence of documented loss is not complete pregnancy follow-up | [wolfe2011] |
| 13.4 / 4.0 | % admitted | Pregnant / nonpregnant reproductive-age women | Same series; observational comparison, not evidence that venom caused every admission | [wolfe2011] |

### OBSERVATIONS

- Irritability, hypertension and sweating formed a prominent paediatric redback presentation. **supported — Alice Springs series** [trethewy2003]
- The Alice Springs sample was selected through hospital discharge diagnoses. **established — study design** [trethewy2003]
- Clinical characteristics and outcomes did not differ significantly between its younger and older child groups. **supported — study comparison** [trethewy2003]
- The US paediatric series included substantial illness alongside many grade-1 presentations. **supported — clinical grading** [glatstein2018]
- Antivenom was received by 14 of its 34 grade-3 patients. **supported — observed practice** [glatstein2018]
- Nonavailability was the recorded reason in 14 of 20 severe patients not given antivenom. **supported — local practice constraint** [glatstein2018]
- Pregnant patients were more often evaluated at healthcare facilities than nonpregnant reproductive-age women. **supported — US surveillance comparison** [wolfe2011]
- No pregnancy losses were documented in that series. **supported — recorded follow-up** [wolfe2011]
- Australian product information calls pregnancy-use information limited and inconclusive. **established — label wording summarized** [seqirus2026]

### TERMS

- **Paediatric:** concerning children; each study's age limits must accompany the term. [trethewy2003; glatstein2018]
- **Selection bias:** differences introduced by which patients enter a study. [trethewy2003; wolfe2011]
- **Short-term outcome:** the result within the study's recorded follow-up, not every later pregnancy or developmental outcome. [wolfe2011]

### Claims to avoid

- “85% of bitten children develop systemic disease”: the denominator was a selected hospital cohort. [trethewy2003]
- Assuming a fixed dose-per-body-mass rule explains every observed age difference; injected venom was not measured. [trethewy2003; glatstein2018]
- “Widow bites cause miscarriage” as an established routine outcome, or “pregnancy is completely safe” from zero recorded losses. [wolfe2011]
- Treating rapid improvement in a retrospective paediatric antivenom group as randomized efficacy evidence. [glatstein2018]
- Generalizing adult trial results to infants or pregnancy without checking exclusions and enrolled ages. [isbister2014; dart2019]

## 13. humans.future-antibodies — Antibodies Without a Horse?

**Suggested kicker:** A defined molecule may change an old manufacturing problem.

**Suggested summary:** Researchers have selected recombinant human antibodies against Mediterranean widow alpha-latrotoxin and tested neutralization in cells and neural preparations. These are experimental candidates; the studies do not establish a licensed replacement for horse-derived antivenom. [fons2020; ruschig2024]

**Taxa/populations studied:** Purified *L. tredecimguttatus* alpha-latrotoxin, *L. mactans* whole venom, human antibody libraries, cell-based assays, rat brain slices and cultured mouse neurons; no treated human patients in these studies. [fons2020; ruschig2024]

### FIGURES

| Value | Unit | Short label | Qualifier / locator | Sources |
|---|---|---|---|---|
| 534 | scFv clones screened | An early discovery screen | Føns Figure 2; binding assay, not 534 effective medicines | [fons2020] |
| 6 | unique binding scFvs | Antibody sequences recovered | Føns Discussion; lead converted to human IgG1 | [fons2020] |
| 5.8 ± 0.8 / 19.1 ± 4.8 | min, mean ± SEM | Delayed toxin effect in rat slices | Toxin alone n=9 / preincubated antibody mixture n=8; Figure 5, threshold-defined EPSC onset | [fons2020] |
| 14 | lead antibodies | A later neutralization panel | Ruschig Results 3.2; selected in cell-based screening | [ruschig2024] |
| 0.30 | nM, IC₅₀ | Potent lead in a cell assay | MRU44–4-A1 against *L. tredecimguttatus* alpha-latrotoxin; preincubation assay | [ruschig2024] |
| 2/14 | lead antibodies | Cross-neutralized southern-widow venom | *L. mactans* whole-venom cell assay; Figure 8 | [ruschig2024] |

### OBSERVATIONS

- Antibody phage display enabled selection without immunizing horses. **established — experimental method** [fons2020; ruschig2024]
- Føns's lead recognized both purified toxin and Mediterranean-widow whole venom. **supported — binding assays** [fons2020]
- That antibody delayed rather than completely prevented toxin effects in rat brain slices. **supported — ex vivo experiment** [fons2020]
- Ruschig's lead antibodies neutralized toxin activity in cell assays. **supported — in vitro evidence** [ruschig2024]
- The later study also tested effects in cultured neurons. **established — study design** [ruschig2024]
- Most Mediterranean-toxin leads failed the southern-widow whole-venom neutralization test. **supported — species comparison** [ruschig2024]
- MRU44–4-A1 did not cross-neutralize *L. mactans* venom under the tested conditions. **supported** [ruschig2024]
- Translation from these preparations to clinical benefit remains unestablished by these experiments. **established — study-scope limit** [fons2020; ruschig2024]

### TERMS

- **Recombinant antibody:** an antibody produced from a specified engineered gene sequence. [fons2020]
- **Phage display:** selection using bacteriophages displaying antibody fragments. [fons2020]
- **IC₅₀:** assay concentration producing half-maximal inhibition; not a patient dose. [ruschig2024]
- **Cross-neutralization:** inhibition of a different venom, requiring functional testing. [ruschig2024]

### Claims to avoid

- “A new human antivenom is available” or “horse antivenom has been replaced.” [fons2020; ruschig2024]
- Assuming defined antibodies guarantee clinical safety. [ruschig2024]
- Equating toxin binding with neutralization, delayed synaptic activity with complete prevention, or preincubation with treatment after a bite. [fons2020; ruschig2024]
- Assuming conserved toxin sequences guarantee every antibody works against every widow species. [ruschig2024]
- Repeating the existing Venom vault's research-tool exhibit: this case is about possible antibody manufacture and species coverage.

## Verification and editorial hand-off

### Scope decisions

| Requested subject | Decision | Editorial placement and boundary |
|---|---|---|
| Existing latrodectism | Enrich heavily; preserve id | Symptoms, mechanism bridge, local/systemic distinction, grading, duration, acute-abdomen confusion and population links; section 1 |
| Existing antivenom | Build fully; preserve id | Production history, horse-derived products, trial endpoints and uncertainty, reactions and descriptively observed practice; section 2 |
| Existing myth | Build fully; preserve id | Widow name, sexual-cannibalism qualification, Apulian tarantism, Spanish reinterpretation and cultural continuity; section 3 |
| Who gets bitten | Keep | US, Australian and European evidence with explicit denominators, sex/age, season, body sites and circumstances; section 4 |
| Bite itself | Keep | Lesion, sweating, pain progression and onset; avoids duplicating the systemic-syndrome case; section 5 |
| Self-experimenters | Keep, with an access qualification | Baerg and Blair; no invented additional experimenters or unread minute-by-minute details; section 6 |
| History of latrodectism | Keep | Russia/karakurt, livestock reports, Mediterranean history, South Africa, Madagascar, Chile, Peru and a qualified Uruguay reference; section 7 |
| Widows and other animals | Keep, conservatively | Veterinary signs, cats/dogs/horses/livestock, experimental model differences; no unsupported rat-versus-guinea-pig comparison; section 8 |
| Stowaways | Keep | Commodity and freight interception records, Dutch examples, US postharvest experiment and NZ regulation; section 9 |
| Widows and fear | Keep | Media, attribution, clinical confirmation and carefully labelled general-spider psychology; section 10 |
| Widows in the home | Keep | Shelter, human contact, defensive behaviour and laboratory control evidence; section 11 |
| Further case: children and pregnancy | Keep | Independent populations, strong denominators, uncertainty in clinical generalization; section 12 |
| Further case: future antibodies | Keep | Experimental human antibodies, manufacturing implications and species-specific neutralization; section 13 |

- **No proposed subject is dropped wholesale.** Outdoor toilets are historical material in epidemiology/home/history, not a separate comic exhibit; glove advice is retained only as an evidence boundary, not a bite-frequency fact.
- Regional antivenom manufacture is merged into `humans.antivenom`. Australia, the US, Argentina and South Africa have verified manufacturing or official product evidence; Mexican manufacture is represented in the Bioclon trial-product provenance, not a new unsupported current stock claim. [dart2013; dart2019]
- Famous cases beyond the self-experimenters are not promoted merely for celebrity. Isolated severe-case reports can illustrate a complication but cannot establish its frequency. The selected population-based and trial material has higher interpretive value here.
- Drug-discovery claims are limited to the antibody case. No purported approved widow-venom analgesic, routine diagnostic blood test, vaccine against widow bites or established human immunity is asserted.
- The Genus vault already covers invasions and identification. Keep this vault's stowaways case focused on intercepted commodities, people and biosecurity evidence rather than repeating a global range map.

### Numerical locators, access and unresolved points

1. **Registry audit:** all 245 existing source keys were inspected before drafting. Reused keys include `monte2011`, `ryan2017`, `baerg1923`, `blair1934`, `graudins2001`, `vetter2017`, `eiden2013`, `australianmuseum2026`, `andrade1996`, `kaston1970` and `wsc2026`. There were no existing `isbister*` entries in this snapshot. `graudins2002` concerns *Steatoda grossa*, not a human widow trial; `graudins2012` concerns cloned toxin activity. They were checked and not repurposed as clinical-trial evidence. Existing `nentwig*` entries are identification accounts rather than the clinical literature required here.
2. **New-key collisions:** `vetter2012` already denotes egg-sac predators/parasitoids, so the urban-prevalence study is `vetter2012b`. `vetter2016` already denotes refuge preference, so the pesticide paper is `vetter2016b`. The two Mammola papers are distinct publications using the same news corpus, not independent replications; they are `mammola2022` and `mammola2022b`.
3. **Redback cohort:** full MJA text and Box 2 checked; expert identification, but service-based recruitment rather than random population sampling. [isbister2003]
4. **US surveillance:** Monte abstract and Kerns full text/tables checked. Incomplete follow-up and nonexpert identification limit interpretation; the major-effect percentage uses all exposures. [monte2011; kerns2025]
5. **Additional practice/outcome cards:** antivenom 521/15,299 (3.4%); managed outside healthcare 7,441 (48.6%); major effect 121 (0.8%); no reported deaths. Opioid recording began in 2019. Surveillance, not care instructions. [kerns2025]
6. **RAVE:** primary abstracts, the accessible RAVE-II manuscript and Ryan's tabulation were checked. RAVE-I's interval is a Bayesian **credible** interval; RAVE-II's is a **confidence** interval. RAVE-I had no placebo-only group. RAVE-II's two-hour pain outcome is not a test of every possible benefit, every dose or every widow species. [isbister2008; isbister2014]
7. **Later US trial:** the 2019 primary abstract and author-institution manuscript establish 60 treated patients, 29/31 allocation, a 48-hour treatment-failure endpoint and reported P=.019. The 2017 systematic review discusses the earlier conference report; it must not be described as having evaluated the later full publication. Manufacturer affiliation and product differences belong in the evidence discussion. [dart2019; ryan2017]
8. **Safety:** Nordt's 96-person retrospective abstract documents urticaria, flushing, other reported symptoms and no detected severe allergy; this cannot rule out rare severe events. Clark's fatal bronchospasm is a separate historical antivenin outcome, not a death caused directly by venom. The checked Seqirus label is version 8.0, revised **9 April 2026**; its 2000 first-approval date is not the beginning of Australian redback antivenom manufacture. [nordt2012; clark1992; seqirus2026; healy2013]
9. **Croatia:** the accessible primary PDF's abstract says 1992–2002, while its methods text says 1992–2000. Use the sample size and named hospital; do not manufacture a single reconciled interval. The Discussion describes two surgical referrals and avoidance of unnecessary laparotomy. Observational antitoxin comparisons were not promoted as randomized efficacy evidence. [dzelalija2003]
10. **Self-experimenters:** Baerg's primary bibliographic record is openly listed, but the full JSTOR PDF was not retrievable in this environment. Blair's publisher introduction was accessible, while complete text was gated. Baerg's retained detailed symptoms therefore cite Eddie Dry's CALS Encyclopedia of Arkansas account, which summarizes his original report; Blair's 1933 date and purpose are independently supported by the University of Melbourne museum history. Exact day-of-month claims, dramatic quotations and later immunity anecdotes are excluded. The distinction between a 1922 experiment and 1923 publication is preserved. [baerg1923; blair1934; dry2026; healy2013]
11. **Tarantism:** Russell's historical article and Pizza's anthropological text were accessible, as was the Spanish historical-review abstract. Older language and a retrospective medical hypothesis do not establish a confirmed *L. tredecimguttatus* bite in a historical participant. Cultural practices are described as practices, not pharmacological treatments. [russell1979; pizza2002; corralcorral2016]
12. **Historical mortality:** the European 2026 review's abstract reports approximately 500 envenomations and ∼1.3% case fatality but does not expose a fully reconciled fatal-case denominator. Keep it as an attributed literature estimate, or omit the card in a short public exhibit. Madagascar's ten ICU cases include only two identified spiders. Older Russian livestock reports are explicitly historical attributions; primary veterinary outbreak datasets and denominator-based Central Asian mortality estimates were not recovered. [terzi2026; ramialiharisoa1994; chamberlin1935]
13. **Latin America:** Schenone's Chilean review was checked in Spanish. The Uruguay reference is a regional historical summary, not a newly recovered Uruguayan case series. Peru's official 2005 technical document supports rural occurrence and surveillance limitations; it does not justify national case totals. Do not import its broad historical *mactans* usage into a modern species map. [schenone2003; ministeriodesalud2005]
14. **Veterinary limits:** feline-paper metadata checked; full text unavailable. Hardy supplies secondary experimental values with unrecovered protocols. The veterinary manual is used for qualified clinical description; its incidental taxonomy and misplaced antivenom paragraph are excluded. [twedt1999; hardy2014; nagy2026]
15. **Trade:** the 2002 MAF report's indexed appendix supplies species-labelled grape records. The full endpoint was intermittently inaccessible; aggregate counts from secondary press coverage are therefore omitted. Noordijk's paper and its repository record support the 14 Dutch imports and six vehicle-associated records. The 2026 MPI standard establishes a regulatory listing, not that every listed species was intercepted in every country or year. [reed2002; noordijk2016; ministryforprimaryindustries2026]
16. **Home/control:** Vetter's primary pesticide paper was available from the university. It reports **five of six**, not all six, water-based formulations failing to show significant egg-sac mortality, and 94–100% prevention of emergence with oil-based aerosols. These laboratory endpoints do not measure reduced human bites. Nelsen's artificial-target work measures defensive behaviour and venom recovery rather than human exposure probability. [vetter2016b; nelsen2014]
17. **Fear/confirmation:** Suchard's primary paper distinguishes clinically diagnosed bites from universal expert identification. French “proven bite” totals concern all included native spiders. Global media data and tarantula psychology are labelled as comparisons; neither supplies a widow-specific phobia prevalence. The later Li study is included to prevent a simplistic claim that phobic people invariably overestimate spider size. [suchard2011; leroux2022; mammola2022; vasey2012; li2021]
18. **Antibody development:** both primary papers checked; distinguish preincubation, functional assay and clinical evidence. [fons2020; ruschig2024]

## SOURCES

NEW entries only. Existing registry entries are deliberately not duplicated. Corporate authors retain their organizational names; keys use their names plus year. Bibliographic years follow publication or document revision, not the date of access.

```yaml
isbister2003:
  authors: Isbister, G. K.; Gray, M. R.
  year: 2003
  title: "Latrodectism: a prospective cohort study of bites by formally identified redback spiders"
  container: Medical Journal of Australia 179(2) 88–91
  doi: 10.5694/j.1326-5377.2003.tb05442.x
  url: https://www.mja.com.au/journal/2003/179/2/latrodectism-prospective-cohort-study-bites-formally-identified-redback-spiders

clark1992:
  authors: Clark, R. F.; Wethern-Kestner, S.; Vance, M. V.; Gerkin, R.
  year: 1992
  title: "Clinical presentation and treatment of black widow spider envenomation: a review of 163 cases"
  container: Annals of Emergency Medicine 21(7) 782–787
  doi: 10.1016/S0196-0644(05)81021-2
  url: https://clinicalmonster.com/wp-content/uploads/sites/3/2013/10/black-widow.pdf

dzelalija2003:
  authors: Dželalija, B.; Medić, A.
  year: 2003
  title: "Latrodectus bites in Northern Dalmatia, Croatia: clinical, laboratory, epidemiological, and therapeutical aspects"
  container: Croatian Medical Journal 44(2) 135–138
  url: https://neuron.mefst.hr/docs/CMJ/issues/2003/44/2/12698502.pdf

isbister2008:
  authors: Isbister, G. K.; Brown, S. G. A.; Miller, M.; Tankel, A.; Macdonald, E.; Stokes, B.; Ellis, R.; Nagree, Y.; Wilkes, G. J.; James, R.; Short, A.; Holdgate, A.
  year: 2008
  title: A randomised controlled trial of intramuscular vs. intravenous antivenom for latrodectism—the RAVE study
  container: QJM 101(7) 557–565
  doi: 10.1093/qjmed/hcn048
  url: https://pubmed.ncbi.nlm.nih.gov/18400776/

isbister2014:
  authors: Isbister, G. K.; Page, C. B.; Buckley, N. A.; Fatovich, D. M.; Pascu, O.; MacDonald, S. P.; Calver, L. A.; Brown, S. G.
  year: 2014
  title: "Randomized controlled trial of intravenous antivenom versus placebo for latrodectism: the second Redback Antivenom Evaluation (RAVE-II) study"
  container: Annals of Emergency Medicine 64(6) 620–628.e2
  doi: 10.1016/j.annemergmed.2014.06.006
  url: https://www.acep.org/siteassets/sites/acep/media/moc/moc-documents/antivenom.pdf

dart2013:
  authors: Dart, R. C.; Bogdan, G.; Heard, K.; Bucher Bartelson, B.; Garcia-Ubbelohde, W.; Bush, S.; Arnold, T.; Clark, R. C.; Hendey, G. W.; Holstege, C.; Spradley, E. A.
  year: 2013
  title: A randomized, double-blind, placebo-controlled trial of a highly purified equine F(ab)2 antibody black widow spider antivenom
  container: Annals of Emergency Medicine 61(4) 458–467
  doi: 10.1016/j.annemergmed.2012.10.008
  url: https://pubmed.ncbi.nlm.nih.gov/23380292/

dart2019:
  authors: Dart, R. C.; Bush, S. P.; Heard, K.; Arnold, T. C.; Sutter, M.; Campagne, D.; Holstege, C. P.; Seifert, S. A.; Lo, J. C. Y.; Quan, D.; Borron, S.; Meurer, D. A.; Burnham, R. I.; McNally, J.; Garcia-Ubbelohde, W.; Anderson, V. E.
  year: 2019
  title: "The efficacy of Antivenin Latrodectus (Black Widow) equine immune F(ab′)2 versus placebo in the treatment of latrodectism: a randomized, double-blind, placebo-controlled, clinical trial"
  container: Annals of Emergency Medicine 74(3) 439–449
  doi: 10.1016/j.annemergmed.2019.02.007
  url: https://pubmed.ncbi.nlm.nih.gov/30926190/

nordt2012:
  authors: Nordt, S. P.; Clark, R. F.; Lee, A.; Berk, K.; Cantrell, F. L.
  year: 2012
  title: Examination of adverse events following black widow antivenom use in California
  container: Clinical Toxicology 50(1) 70–73; first online December 2011
  doi: 10.3109/15563650.2011.639714
  url: https://pubmed.ncbi.nlm.nih.gov/22175789/

seqirus2026:
  authors: Seqirus Pty Ltd
  year: 2026
  title: Australian product information—Red Back Spider Antivenom solution for injection
  container: Product information, version 8.0; revision 9 April 2026; AUST R 74893
  url: https://labeling.seqirus.com/PI/AU/Red-Back-Spider-Antivenom/EN/Red-Back-Spider-Antivenom-Product-Information.pdf

foodanddrugadministration2026:
  authors: US Food and Drug Administration
  year: 2026
  title: "Purple Book product details: Antivenin (Latrodectus mactans), BLA 101062"
  container: FDA Purple Book database; original approval 13 February 1936; checked 23 November 2026
  url: https://purplebooksearch.fda.gov/index.cfm?blaNo=101062&event=productdetails

healy2013:
  authors: Healy, J.; Winkel, K. D. (editors)
  year: 2013
  title: "Venom: Fear, fascination and discovery"
  container: Medical History Museum, University of Melbourne; exhibition catalogue
  url: https://medicalhistorymuseum.mdhs.unimelb.edu.au/__data/assets/pdf_file/0008/3475322/03_Venom-eBook.pdf

ministeriodesalud2025:
  authors: Ministerio de Salud de la Nación Argentina
  year: 2025
  title: Boletín Epidemiológico Nacional N° 769, semana epidemiológica 32
  container: 18 August 2025; section VIII.6, antivenom production, p. 88
  url: https://www.argentina.gob.ar/sites/default/files/2025/01/ben_769_se_32_1882025.pdf

nationalhealthlaboratoryservice2024:
  authors: National Health Laboratory Service
  year: 2024
  title: Annual Report 2023–2024
  container: South Africa; section 2.9.1, South African Vaccine Producers; official PDF hosted in 2025
  url: https://www.nhls.ac.za/wp-content/uploads/2025/03/NHLS_Annual_Report_2023-2024.pdf

russell1979:
  authors: Russell, J. F.
  year: 1979
  title: Tarantism
  container: Medical History 23(4) 404–425
  doi: 10.1017/S0025727300052054
  url: https://www.cambridge.org/core/journals/medical-history/article/tarantism/E48236CE504359115D4450E9DF454F20

pizza2002:
  authors: Pizza, G.
  year: 2002
  title: "Politics of memory in 2001 Salento: the re-invention of tarantism and the debate on its therapeutical value"
  container: AM—Rivista della Società italiana di antropologia medica 13–14 223–236
  url: https://www.amantropologiamedica.unipg.it/index.php/am/article/download/150/142/

corralcorral2016:
  authors: Corral-Corral, I.; Corral-Corral, C.
  year: 2016
  title: "El tarantismo en España en el siglo XVIII: latrodectismo y sugestión"
  container: Revista de Neurología 63(8) 370–379; Spanish historical review, English abstract
  url: https://pubmed.ncbi.nlm.nih.gov/27699754/

kerns2025:
  authors: Kerns, A. F.; Scheffel, E. T.; Farah, R.; Holstege, C. P.
  year: 2025
  title: "Black widow spider exposures: a retrospective review of the National Poison Data System 2012–2022"
  container: Wilderness & Environmental Medicine 36(2) 154–158
  doi: 10.1177/10806032241300134
  url: https://journals.sagepub.com/doi/10.1177/10806032241300134

sutherland1978:
  authors: Sutherland, S. K.; Trinca, J. C.
  year: 1978
  title: "Survey of 2144 cases of red-back spider bites: Australia and New Zealand, 1963–1976"
  container: Medical Journal of Australia 2(14) 620–623
  doi: 10.5694/j.1326-5377.1978.tb131783.x
  url: https://pubmed.ncbi.nlm.nih.gov/732670/

leroux2022:
  authors: Le Roux, G.; Richard, V.; Larcher, G.; French PCC Research Group; Sinno-Tellier, S.; Labadie, M.; de Haro, L.; Descatha, A.
  year: 2022
  title: "Spider bites in France: Epidaemiology of cases occurring in 10 years in metropolitan France"
  container: Medical and Veterinary Entomology 36(2) 159–167; first online 15 December 2021
  doi: 10.1111/mve.12562
  url: https://resjournals.onlinelibrary.wiley.com/doi/10.1111/mve.12562

terzi2026:
  authors: Terzi, I.; Delivalta, N.; Ntoga, M.; Stamatiou, I.
  year: 2026
  title: "Latrodectism in Europe (1973–2025): a systematic review of clinical manifestations, management and outcomes"
  container: Toxicon 274 109024
  doi: 10.1016/j.toxicon.2026.109024
  url: https://www.sciencedirect.com/science/article/pii/S0041010126000425

mokhtar2021:
  authors: Mokhtar, A. S.; Muslimin, M.; Mat-Saat, A. Y.; Ghazali, A.-R. M.; Ismail, A. K.; Abdul-Aziz, N. M.
  year: 2021
  title: "Bite envenomation by Latrodectus geometricus (Araneae: Theridiidae) spiders in Malaysia"
  container: Tropical Biomedicine 38(4) 568–577
  doi: 10.47665/tb.38.4.100
  url: https://pubmed.ncbi.nlm.nih.gov/35001923/

fusto2020:
  authors: Fusto, G.; Bennardo, L.; Duca, E. D.; Mazzuca, D.; Tamburi, F.; Patruno, C.; et al.
  year: 2020
  title: "Spider bites of medical significance in the Mediterranean area: misdiagnosis, clinical features and management"
  container: Journal of Venomous Animals and Toxins including Tropical Diseases 26 e20190100
  doi: 10.1590/1678-9199-jvatitd-2019-0100
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC7534902/

dry2026:
  authors: Dry, E.
  year: 2026
  title: William J. Baerg (1885–1980)
  container: CALS Encyclopedia of Arkansas; updated 1 March 2026; institutional historical biography
  url: https://encyclopediaofarkansas.net/entries/william-j-baerg-1582/

chamberlin1935:
  authors: Chamberlin, R. V.; Ivie, W.
  year: 1935
  title: The black widow spider and its varieties in the United States
  container: Bulletin of the University of Utah 25(8), Biological Series 3(1); June 1935
  url: https://collections.lib.utah.edu/dl_files/c0/94/c094b00fee069079c181614ea1bebe5f2868d0d1.pdf

muller1993:
  authors: Müller, G. J.
  year: 1993
  title: "Black and brown widow spider bites in South Africa: a series of 45 cases"
  container: South African Medical Journal 83(6) 399–405
  url: https://scorpions.co.za/wp-content/uploads/2020/07/muller_black_1993.pdf

ramialiharisoa1994:
  authors: Ramialiharisoa, A.; de Haro, L.; Jouglard, J.; Goyffon, M.
  year: 1994
  title: Le latrodectisme à Madagascar
  container: Médecine Tropicale 54(2) 127–130; French article, English abstract
  url: https://pubmed.ncbi.nlm.nih.gov/7934777/

schenone2003:
  authors: Schenone, H.
  year: 2003
  title: "Cuadros tóxicos producidos por mordeduras de araña en Chile: latrodectismo y loxoscelismo"
  container: Revista Médica de Chile 131(4) 437–444
  doi: 10.4067/S0034-98872003000400013
  url: https://www.scielo.cl/scielo.php?pid=S0034-98872003000400013&script=sci_arttext

ministeriodesalud2005:
  authors: Ministerio de Salud del Perú, Dirección General de Salud de las Personas
  year: 2005
  title: Norma técnica sobre prevención y tratamiento de accidentes por animales ponzoñosos
  container: Lima, Ministerio de Salud; official technical document hosted by EsSalud
  url: https://www.essalud.gob.pe/downloads/guias_emergencia_epidemiologica/normas_animales_ponzonosos.pdf

nagy2026:
  authors: Nagy, A. L.
  year: 2026
  title: Spider and scorpion bites and stings to animals
  container: MSD Veterinary Manual; reviewed by Ahna Brutlag; revised April 2026
  url: https://www.msdvetmanual.com/toxicology/bites-and-stings-from-spiders-scorpions-and-insects/spider-and-scorpion-bites-and-stings-to-animals

hardy2014:
  authors: Hardy, M. C.; Cochrane, J.; Allavena, R. E.
  year: 2014
  title: "Venomous and poisonous Australian animals of veterinary importance: a rich source of novel therapeutics"
  container: BioMed Research International 2014 671041
  doi: 10.1155/2014/671041
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC4131074/

twedt1999:
  authors: Twedt, D. C.; Cuddon, P. A.; Horn, T. W.
  year: 1999
  title: Black widow spider envenomation in a cat
  container: Journal of Veterinary Internal Medicine 13(6) 613–616
  doi: 10.1892/0891-6640(1999)013<0613:BWSEIA>2.3.CO;2
  url: https://pubmed.ncbi.nlm.nih.gov/10587265/

reed2002:
  authors: Reed, C.; Newland, S.
  year: 2002
  title: Pest risk assessment for spiders associated with table grapes from United States (State of California), Australia, Mexico and Chile
  container: MAF Biosecurity Authority, New Zealand; 12 June 2002
  url: https://www.mpi.govt.nz/dmsdocument/8701/direct

noordijk2016:
  authors: Noordijk, J.
  year: 2016
  title: "Nieuwe vondsten van weduwen Latrodectus in Nederland (Araneae: Theridiidae)"
  container: Nederlandse Faunistische Mededelingen 47 17–26
  url: https://repository.naturalis.nl/pub/671670

liu2008:
  authors: Liu, Y.-B.; Daane, K. M.; Tebbets, J. S.; Bettiga, L. J.
  year: 2008
  title: "Ultralow oxygen treatment for control of Latrodectus hesperus (Araneae: Theridiidae) on harvested table grapes"
  container: Journal of Economic Entomology 101(5) 1515–1518
  doi: 10.1603/0022-0493(2008)101[1515:UOTFCO]2.0.CO;2
  url: https://pubmed.ncbi.nlm.nih.gov/18950031/

ministryforprimaryindustries2022:
  authors: Ministry for Primary Industries, New Zealand
  year: 2022
  title: Risk management proposal for new treatment options for fresh table grapes
  container: MPI risk management proposal; sections on contaminating spiders; clinical mortality claims not adopted
  url: https://www.mpi.govt.nz/dmsdocument/53767/direct

ministryforprimaryindustries2026:
  authors: Ministry for Primary Industries, New Zealand
  year: 2026
  title: Fresh table grapes (Vitis spp.) for human consumption—Import Health Standard
  container: MPI official import health standard; checked 23 November 2026
  url: https://www.mpi.govt.nz/dmsdocument/71320/direct

mammola2022:
  authors: Mammola, S.; Malumbres-Olarte, J.; Arabesky, V.; et al.
  year: 2022
  title: An expert-curated global database of online newspaper articles on spiders and spider bites
  container: Scientific Data 9 109
  doi: 10.1038/s41597-022-01197-6
  url: https://www.nature.com/articles/s41597-022-01197-6

mammola2022b:
  authors: Mammola, S.; Malumbres-Olarte, J.; Arabesky, V.; et al.
  year: 2022
  title: The global spread of misinformation on spiders
  container: Current Biology 32(16) R871–R873
  doi: 10.1016/j.cub.2022.07.026
  url: https://pubmed.ncbi.nlm.nih.gov/35998593/

suchard2011:
  authors: Suchard, J. R.
  year: 2011
  title: "\"Spider bite\" lesions are usually diagnosed as skin and soft-tissue infections"
  container: Journal of Emergency Medicine 41(5) 473–481
  doi: 10.1016/j.jemermed.2009.09.014
  url: https://www.sciencedirect.com/science/article/pii/S0736467909007926

vasey2012:
  authors: Vasey, M. W.; Vilensky, M. R.; Heath, J. H.; Harbaugh, C. N.; Buffington, A. G.; Fazio, R. H.
  year: 2012
  title: "It was as big as my head, I swear!: biased spider size estimation in spider phobia"
  container: Journal of Anxiety Disorders 26(1) 20–24; first online 2011
  doi: 10.1016/j.janxdis.2011.08.009
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC3244514/

li2021:
  authors: Li, S. H.; Graham, B. M.
  year: 2021
  title: "Mind’s eye: the impact of spider presence and cognitive therapy on size estimation biases in spider phobia"
  container: Journal of Anxiety Disorders 83 102456
  doi: 10.1016/j.janxdis.2021.102456
  url: https://www.sciencedirect.com/science/article/pii/S0887618521001031

vetter2012b:
  authors: Vetter, R. S.; Vincent, L. S.; Danielsen, D. W. R.; Reinker, K. I.; Clarke, D. E.; Itnyre, A. A.; Kabashima, J. N.; Rust, M. K.
  year: 2012
  title: "The prevalence of brown widow and black widow spiders (Araneae: Theridiidae) in urban southern California"
  container: Journal of Medical Entomology 49(4) 947–951
  doi: 10.1603/ME11285
  url: https://doi.org/10.1603/ME11285

vetter2016b:
  authors: Vetter, R. S.; Tarango, J.; Campbell, K. A.; Tham, C.; Hayashi, C. Y.; Choe, D.-H.
  year: 2016
  title: "Efficacy of several pesticide products on brown widow spider (Araneae: Theridiidae) egg sacs and their penetration through the egg sac silk"
  container: Journal of Economic Entomology 109(1) 267–272; first online 3 November 2015
  doi: 10.1093/jee/tov288
  url: https://ucanr.edu/sites/ucrurbanpest/files/232647.pdf

nelsen2014:
  authors: Nelsen, D. R.; Kelln, W.; Hayes, W. K.
  year: 2014
  title: "Poke but don’t pinch: risk assessment and venom metering in the western black widow spider, Latrodectus hesperus"
  container: Animal Behaviour 89 107–114
  doi: 10.1016/j.anbehav.2013.12.019
  url: https://redtox.org/sites/default/files/toxiblog/descargables/2014-latrodectus-hesperus-ea_1.pdf

trethewy2003:
  authors: Trethewy, C. E.; Bolisetty, S.; Wheaton, G.
  year: 2003
  title: Red-back spider envenomation in children in Central Australia
  container: Emergency Medicine 15(2) 170–175
  doi: 10.1046/j.1442-2026.2003.00435.x
  url: https://pubmed.ncbi.nlm.nih.gov/12675627/

glatstein2018:
  authors: Glatstein, M.; Carbell, G.; Scolnik, D.; Rimon, A.; Hoyte, C.
  year: 2018
  title: "Treatment of pediatric black widow spider envenomation: a national poison center's experience"
  container: American Journal of Emergency Medicine 36 998–1002; accepted November 2017
  doi: 10.1016/j.ajem.2017.11.011
  url: https://training-georgiapoisoncenter.seoteric.com/wp-content/uploads/2018/12/Black-Widow-antivenom-rocky-mountain-poison-center-1.pdf

wolfe2011:
  authors: Wolfe, M. D.; Myers, O.; Caravati, E. M.; Rayburn, W. F.; Seifert, S. A.
  year: 2011
  title: Black widow spider envenomation in pregnancy
  container: Journal of Maternal-Fetal & Neonatal Medicine 24(1) 122–126; first online May 2010
  doi: 10.3109/14767058.2010.481317
  url: https://pubmed.ncbi.nlm.nih.gov/20459336/

fons2020:
  authors: Føns, S.; Ledsgaard, L.; Nikolaev, M. V.; Vassilevski, A. A.; Sørensen, C. V.; Chevalier, M. K.; Fiebig, M.; Laustsen, A. H.
  year: 2020
  title: Discovery of a recombinant human monoclonal immunoglobulin G antibody against α-latrotoxin from the Mediterranean black widow spider (Latrodectus tredecimguttatus)
  container: Frontiers in Immunology 11 587825
  doi: 10.3389/fimmu.2020.587825
  url: https://www.frontiersin.org/journals/immunology/articles/10.3389/fimmu.2020.587825/full

ruschig2024:
  authors: Ruschig, M.; Nerlich, J.; Becker, M.; et al.
  year: 2024
  title: Human antibodies neutralizing the alpha-latrotoxin of the European black widow
  container: Frontiers in Immunology 15 1407398
  doi: 10.3389/fimmu.2024.1407398
  url: https://www.frontiersin.org/journals/immunology/articles/10.3389/fimmu.2024.1407398/full
```

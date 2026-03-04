import { motion } from "framer-motion";
import { BookMarked, ExternalLink } from "lucide-react";

const references = [
  {
    text: "World Health Organization. (2024). Malnutrition. WHO Fact Sheets.",
    link: "https://www.who.int/news-room/fact-sheets/detail/malnutrition",
  },
  {
    text: "Kementerian Kesehatan Republik Indonesia. (2024). Prevalensi stunting nasional turun menjadi 19,8 persen (SSGI 2024).",
    link: "https://sehatnegeriku.kemkes.go.id/baca/umum/20250526/2247848/ssgi-2024-prevalensi-stunting-nasional-turun-menjadi-198/",
  },
  {
    text: "Mardhiah, H., et al. (2023). Menentukan prioritas intervensi pencegahan stunting. Kementerian Kesehatan RI.",
    link: "https://simplek.bkpk.kemkes.go.id/storage/repositories/Menentukan%20Prioritas%20Intervensi%20Pencegahan%20Stunting.pdf",
  },
  {
    text: "Cameron, L., Shah, M., & Olivia, S. (2021). Water, sanitation, and childhood stunting in Indonesia. Social Science & Medicine.",
    link: "https://doi.org/10.1016/j.socscimed.2021.114039",
  },
  {
    text: "Purba, A., Lumbantoruan, R., & Hutabarat, M. (2023). Exploring local food sources as sustainable alternatives for child nutrition in Indonesia.",
    link: "https://doi.org/10.47556/ajnfs.2023.6.2.45",
  },
  {
    text: "Köhler, R., et al. (2020). Nutrient composition of the Indonesian sago grub (Rhynchophorus bilineatus). International Journal of Tropical Insect Science.",
    link: "https://doi.org/10.1007/s42690-020-00120-z",
  },
  {
    text: "Lestari, S., Dewi, N., & Sari, R. (2023). Pengolahan ulat sagu menjadi tepung sebagai alternatif sumber protein lokal. Jurnal Analis Kesehatan Indonesia.",
    link: "#",
  },
  {
    text: "FAO. (2013). Edible insects: Future prospects for food and feed security. Food and Agriculture Organization.",
    link: "https://www.fao.org/3/i3253e/i3253e.pdf",
  },
  {
    text: "Kadir, A. A., Rahman, M. M., & Hasan, M. N. (2022). Processing and nutritional evaluation of edible insects. Food Research International.",
    link: "https://doi.org/10.1016/j.foodres.2022.112045",
  },
  {
    text: "Bahrein, E., Mohd. Nur, B., & Murlida, E. (2025). Pengaruh suhu dan waktu pemanggangan terhadap mutu fisik, kimia dan organoleptik pada biskuit ubi jalar ungu.",
    link: "https://jim.usk.ac.id/JFP/article/view/17006",
  },
];

export function ReferencesSection() {
  return (
    <section id="referensi" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <BookMarked size={16} />
            <span>Referensi Ilmiah</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Daftar{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-600">
              Referensi
            </span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Semua informasi didukung oleh penelitian dan sumber terpercaya
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
        >
          <div className="bg-gradient-to-r from-blue-500 to-cyan-600 p-6 text-white">
            <div className="flex items-center gap-3">
              <BookMarked size={28} />
              <div>
                <h3 className="text-xl font-bold">Sumber & Sitasi</h3>
                <p className="text-white/80 text-sm">
                  Berdasarkan penelitian ilmiah terpercaya
                </p>
              </div>
            </div>
          </div>

          <div className="p-6">
            <ol className="space-y-3">
              {references.map((ref, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ x: 5 }}
                  className="group"
                >
                  <a 
                    href={ref.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex gap-4 p-3 rounded-xl hover:bg-blue-50 transition-all cursor-pointer border border-transparent hover:border-blue-200 items-start"
                  >
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs mt-0.5">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700 text-sm leading-relaxed group-hover:text-blue-800 transition-colors">
                        {ref.text}
                      </p>
                    </div>
                    <ExternalLink
                      size={16}
                      className="flex-shrink-0 text-gray-300 group-hover:text-blue-500 transition-colors mt-1"
                    />
                  </a>
                </motion.li>
              ))}
            </ol>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


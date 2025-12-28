import { Diary, DiaryEntryFile } from "../../../generated/prisma";
import {
  Document,
  Page,
  Text,
  Image,
  StyleSheet,
  Font,
  View,
} from "@react-pdf/renderer";
import React from "react";
import { EntryWithQuestionTitle } from "@/lib/types";

Font.register({
  family: "Roboto",
  src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf",
});

const styles = StyleSheet.create({
  page: {
    fontFamily: "Roboto",
    backgroundColor: "#F8F3E7",
  },

  // COVER
  coverPage: {
    backgroundColor: "#F8F3E7",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
  },
  coverTitle: {
    fontSize: 52,
    color: "#C47F5E",
    textAlign: "center",
    marginBottom: 20,
  },
  coverSubtitle: {
    fontSize: 32,
    color: "#262626",
    textAlign: "center",
  },

  decorationTopLeft: {
    position: "absolute",
    top: -20,
    left: -100,
    width: 333,
    height: 319,
  },
  decorationTopRight: {
    position: "absolute",
    top: -20,
    right: -37,
    width: 187,
    height: 186,
  },
  decorationBottomRight: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 181,
    height: 241,
  },

  // CATEGORY TITLE PAGE
  categoryPage: {
    backgroundColor: "#F8F3E7",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
  },
  categoryTitle: {
    fontSize: 24,
    color: "#C47F5E",
    textAlign: "center",
    marginBottom: 20,
  },
  chapterNumber: {
    fontSize: 24,
    color: "#262626",
    textAlign: "center",
    marginBottom: 10,
  },
  categoryIcon: {
    width: 100,
    height: 140,
    objectFit: "contain",
    marginTop: 10,
  },

  // QUESTIONS PAGE (ONE PAGE PER CATEGORY, AUTO PAGINATION)
  questionsPage: {
    backgroundColor: "#F8F3E7",
    padding: 24,
  },
  questionsHeader: {
    marginBottom: 16,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#C47F5E",
    borderBottomStyle: "solid",
  },
  chapterInfo: {
    fontSize: 12,
    color: "#C47F5E",
    marginBottom: 4,
  },
  categoryName: {
    fontSize: 16,
    color: "#262626",
  },

  questionBlock: {
    marginTop: 14,
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(196,127,94,0.25)",
    borderBottomStyle: "solid",
  },
  questionTitle: {
    fontSize: 14,
    color: "#262626",
    marginBottom: 8,
  },
  answerText: {
    fontSize: 12,
    color: "#262626",
    marginBottom: 10,
    lineHeight: 1.35,
  },

  imagesGrid: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  imageContainer: {
    width: 180,
    height: 180,
    borderRadius: 10,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#C47F5E",
    borderStyle: "solid",
  },
  image: {
    width: 180,
    height: 180,
    objectFit: "cover",
  },
});

type PdfDiaryProps = {
  diary: Diary;
  decorations: { flower1: string; flower2: string; flower3: string };
  categories: {
    chapterNumber: number;
    categoryTitle: string;
    categoryIcon: string; // jeśli chcesz USUNĄĆ ikony, zostaw pusty string i nic się nie wyrenderuje
    questions: EntryWithQuestionTitle[];
  }[];
};

const PdfDiary = ({ diary, decorations, categories }: PdfDiaryProps) => {
  return (
    <Document>
      {/* OKŁADKA */}
      <Page size="A4" style={[styles.page, styles.coverPage]}>
        {decorations.flower3 ? (
          <Image src={decorations.flower3} style={styles.decorationTopLeft} />
        ) : null}
        {decorations.flower1 ? (
          <Image src={decorations.flower1} style={styles.decorationTopRight} />
        ) : null}
        {decorations.flower2 ? (
          <Image
            src={decorations.flower2}
            style={styles.decorationBottomRight}
          />
        ) : null}

        <Text style={styles.coverTitle}>{diary.name}</Text>
        <Text style={styles.coverSubtitle}>Dziennik wspomnień</Text>
      </Page>

      {/* KATEGORIE */}
      {categories.map((category) => (
        <React.Fragment key={category.chapterNumber}>
          {/* STRONA TYTUŁOWA KATEGORII (ZOSTAJE JAK JEST) */}
          <Page size="A4" style={[styles.page, styles.categoryPage]}>
            <Text style={styles.chapterNumber}>
              Rozdział {category.chapterNumber}
            </Text>
            <Text style={styles.categoryTitle}>{category.categoryTitle}</Text>

            {/* Jeśli chcesz USUNĄĆ ikony w PDF: usuń ten blok albo ustaw categoryIcon = '' */}
            {category.categoryIcon ? (
              <Image src={category.categoryIcon} style={styles.categoryIcon} />
            ) : null}
          </Page>

          {/* PYTANIA: JEDEN "Page" NA CAŁĄ KATEGORIĘ (AUTO-ŁAMANIE) */}
          <Page size="A4" style={[styles.page, styles.questionsPage]} wrap>
            <View style={styles.questionsHeader} fixed>
              <Text style={styles.chapterInfo}>
                Rozdział {category.chapterNumber}
              </Text>
              <Text style={styles.categoryName}>{category.categoryTitle}</Text>
            </View>

            {category.questions.map((entry) => (
              <View key={entry.id} style={styles.questionBlock}>
                <Text style={styles.questionTitle}>{entry.question_title}</Text>

                {entry.text ? (
                  <Text style={styles.answerText}>{entry.text}</Text>
                ) : null}

                {entry.files && entry.files.length > 0 ? (
                  <View style={styles.imagesGrid}>
                    {entry.files.map((file: DiaryEntryFile, idx: number) => (
                      <View key={`${file.id}-${idx}`} style={styles.imageContainer}>
                        {/* Uwaga: zakładam, że file.url masz już jako dataURL albo poprawny URL.
                           Jeśli w PdfDiary miałeś wcześniej inną nazwę pola, dopasuj ją tutaj. */}
                        <Image src={(file as any).url || (file as any).path} style={styles.image} />
                      </View>
                    ))}
                  </View>
                ) : null}
              </View>
            ))}
          </Page>
        </React.Fragment>
      ))}
    </Document>
  );
};

export default PdfDiary;
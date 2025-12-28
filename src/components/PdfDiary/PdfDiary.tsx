/* eslint-disable jsx-a11y/alt-text */

import { Diary, DiaryEntryFile } from "../../../generated/prisma";
import { Document, Page, Text, Image as PdfImage, StyleSheet, Font, View } from "@react-pdf/renderer";
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
    fontFamily: "Roboto",
    fontSize: 52,
    color: "#C47F5E",
    textAlign: "center",
    marginBottom: 16,
  },
  coverSubtitle: {
    fontFamily: "Roboto",
    fontSize: 32,
    color: "#262626",
    textAlign: "center",
  },

  chapterPage: {
    backgroundColor: "#F8F3E7",
    paddingTop: 28,
    paddingHorizontal: 28,
    paddingBottom: 40,
  },

  chapterHeader: {
    marginBottom: 18,
  },
  chapterNumber: {
    fontFamily: "Roboto",
    fontSize: 14,
    color: "#C47F5E",
    marginBottom: 4,
  },
  chapterTitle: {
    fontFamily: "Roboto",
    fontSize: 22,
    color: "#262626",
  },

  // pojedyncze pytanie/odpowiedź - jedno pod drugim
  qaBlock: {
    marginTop: 16,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#E6D9CC",
  },
  questionTitle: {
    fontFamily: "Roboto",
    fontSize: 16,
    color: "#262626",
    marginBottom: 8,
  },
  answerText: {
    fontFamily: "Roboto",
    fontSize: 12,
    color: "#262626",
    lineHeight: 1.35,
    marginBottom: 10,
  },

  imagesGrid: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  imageContainer: {
    width: 170,
    height: 170,
    borderRadius: 10,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#C47F5E",
    marginRight: 10,
    marginBottom: 10,
  },
  image: {
    width: 170,
    height: 170,
    objectFit: "cover",
  },
});

type CategoryForPdf = {
  chapterNumber: number;
  categoryTitle: string;
  questions: EntryWithQuestionTitle[];
};

type PdfDiaryProps = {
  diary: Diary;
  categories: CategoryForPdf[];
};

const PdfDiary = ({ diary, categories }: PdfDiaryProps) => {
  return (
    <Document>
      {/* OKŁADKA */}
      <Page size="A4" style={styles.coverPage}>
        <Text style={styles.coverTitle}>{diary.name}</Text>
        <Text style={styles.coverSubtitle}>Dziennik wspomnień</Text>
      </Page>

      {/* ROZDZIAŁY: jedna "sekcja" z pytaniami jedno pod drugim */}
      {categories.map((category) => (
        <Page key={`chapter-${category.chapterNumber}`} size="A4" style={styles.chapterPage} wrap>
          <View style={styles.chapterHeader}>
            <Text style={styles.chapterNumber}>Rozdział {category.chapterNumber}</Text>
            <Text style={styles.chapterTitle}>{category.categoryTitle}</Text>
          </View>

          {category.questions.map((entry) => (
            <View key={entry.id} style={styles.qaBlock} wrap>
              <Text style={styles.questionTitle}>{entry.question_title}</Text>

              {!!entry.text && <Text style={styles.answerText}>{entry.text}</Text>}

              {!!entry.files?.length && (
                <View style={styles.imagesGrid}>
                  {entry.files.map((file: DiaryEntryFile, fIndex: number) => (
                    <View key={`${entry.id}-${fIndex}`} style={styles.imageContainer}>
                      <PdfImage src={file.url} style={styles.image} />
                    </View>
                  ))}
                </View>
              )}
            </View>
          ))}
        </Page>
      ))}
    </Document>
  );
};

export default PdfDiary;
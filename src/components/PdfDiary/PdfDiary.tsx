import { Diary, DiaryEntryFile } from "../../../generated/prisma";
import { Document, Page, Text, Image, StyleSheet, Font, View } from "@react-pdf/renderer";
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
  },
  coverTitle: {
    fontFamily: "Roboto",
    fontSize: 52,
    color: "#C47F5E",
    textAlign: "center",
    marginBottom: 20,
  },
  coverSubtitle: {
    fontFamily: "Roboto",
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
  categoryPage: {
    backgroundColor: "#F8F3E7",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  categoryTitle: {
    fontFamily: "Roboto",
    fontSize: 24,
    color: "#C47F5E",
    textAlign: "center",
    marginBottom: 20,
  },
  chapterNumber: {
    fontFamily: "Roboto",
    fontSize: 24,
    color: "#262626",
    textAlign: "center",
  },
  categoryIcon: {
    width: 100,
    height: 140,
    objectFit: "contain",
  },
  questionPage: {
    backgroundColor: "#F8F3E7",
    paddingTop: 48, 
    paddingHorizontal: 20,
    paddingBottom: 24,
  },
  chapterInfo: {
    fontFamily: "Roboto",
    fontSize: 12,
    color: "#C47F5E",
    marginBottom: 12,
  },
  questionBlock: {
    marginBottom: 18,
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#E6D9CC",
  },
  questionTitle: {
    fontFamily: "Roboto",
    fontSize: 18,
    color: "#262626",
    marginBottom: 8,
  },
  answerText: {
    fontFamily: "Roboto",
    fontSize: 16,
    color: "#262626",
    marginBottom: 12,
  },

  imagesGrid: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  imageContainer: {
    width: 200,
    height: 200,
    borderRadius: 10,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#C47F5E",
    marginRight: 10,
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    objectFit: "cover",
  },
  fixedHeader: {
    position: "absolute",
    top: 18,
    left: 20,
    right: 20,
  },
});

type PdfDiaryProps = {
  diary: Diary;
  decorations: { flower1: string; flower2: string; flower3: string };
  categories: {
    chapterNumber: number;
    categoryTitle: string;
    categoryIcon: string;
    questions: EntryWithQuestionTitle[];
  }[];
};

const PdfDiary = ({ diary, decorations, categories }: PdfDiaryProps) => {
  return (
    <Document>
      <Page size="A4" style={styles.coverPage}>
        <Image src={decorations.flower3} style={styles.decorationTopLeft} />
        <Image src={decorations.flower1} style={styles.decorationTopRight} />
        <Image src={decorations.flower2} style={styles.decorationBottomRight} />

        <Text style={styles.coverTitle}>{diary.name}</Text>
        <Text style={styles.coverSubtitle}>Dziennik wspomnień</Text>
      </Page>

      {categories.map((category) => (
        <React.Fragment key={`cat-${category.chapterNumber}`}>
          <Page size="A4" style={styles.categoryPage}>
            {decorations.flower3 && <Image src={decorations.flower3} style={styles.decorationTopLeft} />}
            {decorations.flower1 && <Image src={decorations.flower1} style={styles.decorationTopRight} />}
            {decorations.flower2 && <Image src={decorations.flower2} style={styles.decorationBottomRight} />}

            <Text style={styles.chapterNumber}>Rozdział {category.chapterNumber}</Text>
            <Text style={styles.categoryTitle}>{category.categoryTitle}</Text>
            {category.categoryIcon && <Image src={category.categoryIcon} style={styles.categoryIcon} />}
          </Page>

          <Page size="A4" style={styles.questionPage} wrap>
            <View style={styles.fixedHeader} fixed>
              <Text style={styles.chapterInfo}>
                Rozdział {category.chapterNumber} • {category.categoryTitle}
              </Text>
            </View>

            {category.questions.map((entry) => (
              <View key={entry.id} style={styles.questionBlock} wrap>
                <Text style={styles.questionTitle}>{entry.question_title}</Text>

                {entry.text && <Text style={styles.answerText}>{entry.text}</Text>}

                {entry.files && entry.files.length > 0 && (
                  <View style={styles.imagesGrid} wrap>
                    {entry.files.map((file: DiaryEntryFile, fIndex: number) => (
                      <View key={`${entry.id}-${fIndex}`} style={styles.imageContainer}>
                        <Image src={file.url} style={styles.image} />
                      </View>
                    ))}
                  </View>
                )}
              </View>
            ))}
          </Page>
        </React.Fragment>
      ))}
    </Document>
  );
};

export default PdfDiary;
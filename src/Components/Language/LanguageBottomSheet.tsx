import { StyleSheet, Text, View } from "react-native";
import React, { useMemo, useRef, useState } from "react";
import SectionTitleText from "../CustomTexts/SectionTitleText";
import CustomButton from "../CustomButton";
import { appColors } from "../../styles/colors";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import LanguageCard from "./LanguageCard";
import { vs } from "react-native-size-matters";
import { dutch, english } from "../../localization/Languages";
import { LanguageData } from "../../utils/typesAndInterfaces";
import { useAppSelector } from "../../redux/store";
import { useDispatch } from "react-redux";
import { setLanguage } from "../../redux/reducers/LanguageSlice";
import useGetLanguage from "../../hooks/useGetLanguage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LANG_KEY } from "../../utils/constants";
import useLocalStorage from "../../hooks/useLocalStorage";

const renderBackdrop = (props: BottomSheetBackdropProps) => (
  <BottomSheetBackdrop
    {...props}
    disappearsOnIndex={-1}
    appearsOnIndex={0}
    opacity={0.5}
  />
);

interface Option {
  id: number;
  label: string;
  description: LanguageData;
}

interface Props {
  bottomSheetRef: React.RefObject<BottomSheetMethods | null>;
}

const LanguageBottomSheet = ({ bottomSheetRef }: Props) => {
  const dispatch = useDispatch();
  const language = useGetLanguage();
  const options: Option[] = [
    { id: 1, label: "English", description: english },
    { id: 2, label: "Deutsch", description: dutch },
    // { id: 3, label: "Espanol", description: "Third choice" },
    // { id: 4, label: "Italiano", description: "Fourth choice" },
  ];
  const currentLanguageIndex = options.findIndex(
    (item) => item.description.countryCode === language.countryCode,
  );
  const [selectedOption, setSelectedOption] = useState(currentLanguageIndex);
  const snapPoints = useMemo(() => ["25%"], []);

  const handleActionSheet = async (action: "close" | "open") => {
    if (action === "open") {
      bottomSheetRef.current?.expand();
    } else {
      dispatch(setLanguage(options[selectedOption].description));

      bottomSheetRef.current?.close();
    }
  };

  const handleSelectedOption = (index: number) => {
    setSelectedOption(index);
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={-1}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      backdropComponent={renderBackdrop}
    >
      <BottomSheetView style={styles.sheetContent}>
        <SectionTitleText fontFamily="Bold">
          {language.change_language}
        </SectionTitleText>

        <View style={styles.menuContainer}>
          {options.map((lang, index) => (
            <LanguageCard
              key={lang.id}
              label={lang.label}
              onClickLanguage={() => handleSelectedOption(index)}
              isSelected={selectedOption === index}
            />
          ))}
        </View>

        <CustomButton
          buttonText="Confirm"
          bgColor={appColors.black}
          buttonFn={() => handleActionSheet("close")}
        />
      </BottomSheetView>
    </BottomSheet>
  );
};

export default LanguageBottomSheet;

const styles = StyleSheet.create({
  sheetContent: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
    gap: vs(20),
    // borderWidth: 1,
    // borderColor: "red",
  },
  menuContainer: {
    gap: vs(15),
    // height: "100%",
    // borderWidth: 1,
    // borderColor: "blue",
  },
});

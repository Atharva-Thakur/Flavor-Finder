/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, View } from "@aws-amplify/ui-react";
export default function Footer(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="619px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Footer")}
      {...rest}
    >
      <Flex
        width="1440px"
        height="619px"
        {...getOverrideProps(overrides, "HeroLayout3")}
      ></Flex>
      <View
        width="1076px"
        height="531px"
        {...getOverrideProps(overrides, "Group 1139")}
      ></View>
    </View>
  );
}

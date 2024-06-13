import { FIELD_NAMES } from "./constants";

export const getDefaultValues = () => ({
  [FIELD_NAMES.NAME]: "",
  [FIELD_NAMES.RESOURCE_TYPE]: "",
  [FIELD_NAMES.PROPERTIES_FIELD_ARRAY.FIELD_NAME]: [
    {
      [FIELD_NAMES.PROPERTIES_FIELD_ARRAY.PROPERTY_NAME]: "Description",
      [FIELD_NAMES.PROPERTIES_FIELD_ARRAY.PROPERTY_VALUE]: ""
    },
    { [FIELD_NAMES.PROPERTIES_FIELD_ARRAY.PROPERTY_NAME]: "IP", [FIELD_NAMES.PROPERTIES_FIELD_ARRAY.PROPERTY_VALUE]: "" },
    {
      [FIELD_NAMES.PROPERTIES_FIELD_ARRAY.PROPERTY_NAME]: "Software",
      [FIELD_NAMES.PROPERTIES_FIELD_ARRAY.PROPERTY_VALUE]: ""
    }
  ]
});

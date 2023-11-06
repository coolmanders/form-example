import React, { useMemo, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../../helpers/formSchema";
import { FormInputs } from "../../types";
import { FormControl, InputLabel } from "@mui/material";
import {
  StyledForm,
  StyledTextField,
  StyledButton,
  StyledSelect,
  StyledSelectLabel,
} from "./styles";

export const Form: React.FC = () => {
  const languages = useMemo(() => ["Čeština", "Angličtina", "Slovenština"], []);

  const [submittedData, setSubmittedData] = useState<FormInputs | null>(null);

  const { control, handleSubmit, formState } = useForm<FormInputs>({
    resolver: yupResolver(formSchema),
    mode: "onChange",
  });

  const onSubmit = (data: FormInputs) => {
    setSubmittedData(data);
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          render={({ field, fieldState }) => (
            <StyledTextField
              {...field}
              label="Jméno"
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
            />
          )}
        />
        <Controller
          name="phone"
          control={control}
          render={({ field, fieldState }) => (
            <StyledTextField
              {...field}
              label="Telefon"
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <StyledTextField
              {...field}
              label="E-mail"
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
            />
          )}
        />
        <FormControl>
          <InputLabel id="language-label">Hlavní Jazyk</InputLabel>
          <Controller
            name="language"
            control={control}
            render={({ field, fieldState }) => (
              <StyledSelect
                {...field}
                labelId="language-label"
                label="Hlavní Jazyk"
                id="language"
                error={!!fieldState.error}
              >
                <StyledSelectLabel value="" disabled>
                  Vyberte hodnotu
                </StyledSelectLabel>
                {languages.map((lang) => (
                  <StyledSelectLabel key={lang} value={lang}>
                    {lang}
                  </StyledSelectLabel>
                ))}
              </StyledSelect>
            )}
          />
        </FormControl>
        <StyledButton
          type="submit"
          variant="contained"
          color="primary"
          disabled={!formState.isValid}
        >
          Odeslat
        </StyledButton>
      </StyledForm>
      {submittedData && (
        <div>
          <h3>Odeslaná data:</h3>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </div>
      )}
    </>
  );
};

import React from 'react';
import { useForm } from 'react-hook-form';
import { getHelperText, getIsError } from './formFieldHelpers';

function Form({ defaultValues = {}, children, onSubmit }) {
  const {
    handleSubmit, register, errors, // watch,
  } = useForm({ defaultValues });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {
        React.Children.toArray(children).map((child) => {
          const { type, props } = child;

          return (
            props.name ? (
              <React.Fragment key={props.name}>
                {
                  React.createElement(type, {
                    ...{
                      ...props,
                      register,
                      error: getIsError(errors, props.name),
                      helperText: getHelperText(errors, props.name)
                    }
                  })
                }
              </React.Fragment>
            ) : child
          )
        })
      }
    </form>
  );
}

export default Form

import { useForm } from '@tanstack/react-form'
import { Form, Button } from 'react-bootstrap'

// We also support Valibot, ArkType, and any other standard schema library
import { z } from 'zod'

const PersonForm = () => {
  const form = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      // age: 0,
    },
    validators: {
      // Pass a schema or function to validate
      onChange: z.object({
        firstName: z
          .string()
          .min(1, { message: 'First Name is required' })
          .min(3, { message: 'First Name must be at least 3 characters' }),
        lastName: z.string(),
        // age: z.number().min(13),
      }),
    },
    onSubmit: ({ value }) => {
      // Do something with form data
      alert(JSON.stringify(value, null, 2))
    },
  })

  return (
    <div>
      <h1>Add person</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          form.handleSubmit()
        }}
      >
        <form.Field name="firstName">
          {(field) => (
            <>
              <Form.Label htmlFor={field.name}>First Name</Form.Label>
              <Form.Control
                type="text"
                id={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              {JSON.stringify(field.state.meta.errors)}
            </>
          )}
        </form.Field>
        <form.Field name="lastName">
          {(field) => (
            <>
              <Form.Label htmlFor={field.name}>Last Name</Form.Label>
              <Form.Control
                type="text"
                id={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              {JSON.stringify(field.state.meta.errors)}
            </>
          )}
        </form.Field>
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
        >
          {([canSubmit, isSubmitting]) => (
            <>
              <Button type="submit" disabled={!canSubmit || isSubmitting}>
                {isSubmitting ? '...' : 'Submit'}{' '}
              </Button>
              <Button onClick={() => form.reset()}>Reset</Button>
            </>
          )}
        </form.Subscribe>
      </form>
    </div>
  )
}

export default PersonForm

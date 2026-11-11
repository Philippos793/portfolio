import { useReducer } from 'react'
import styles from './ContactForm.module.css'

// Formspree endpoint: receives the message and forwards it to my email
const FORM_ENDPOINT = 'https://formspree.io/f/mrppywzk'

const initialState = {
  values: { name: '', email: '', message: '' },
  errors: {},
  status: 'idle', // idle | sending | success | error
}

function reducer(state, action) {
  switch (action.type) {
    case 'change':
      return {
        ...state,
        values: { ...state.values, [action.field]: action.value },
        // As soon as the user edits a field, clear its error
        errors: { ...state.errors, [action.field]: undefined },
      }
    case 'invalid':
      return { ...state, errors: action.errors }
    case 'sending':
      return { ...state, status: 'sending' }
    case 'success':
      // Clear the fields so the same message is not sent twice by accident
      return { ...initialState, status: 'success' }
    case 'error':
      // Keep the fields: the user should not lose what they wrote
      return { ...state, status: 'error' }
    default:
      throw new Error(`Unknown action: ${action.type}`)
  }
}

function validate({ name, email, message }) {
  const errors = {}
  if (!name.trim()) errors.name = 'Please enter your name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Please enter a valid email.'
  if (message.trim().length < 10) errors.message = 'Message should be at least 10 characters.'
  return errors
}

function ContactForm({ nameInputRef }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { values, errors, status } = state
  const isSending = status === 'sending'

  function handleChange(e) {
    dispatch({ type: 'change', field: e.target.name, value: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const found = validate(values)
    if (Object.keys(found).length > 0) {
      dispatch({ type: 'invalid', errors: found })
      return
    }

    dispatch({ type: 'sending' })
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(values),
      })
      // fetch does not throw on 4xx/5xx, so check response.ok ourselves
      dispatch({ type: response.ok ? 'success' : 'error' })
    } catch {
      // We get here when there is no connection at all
      dispatch({ type: 'error' })
    }
  }

  return (
    <form id="contact-form" className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.field}>
        <label htmlFor="name">Name</label>
        <input
          ref={nameInputRef}
          id="name"
          name="name"
          value={values.name}
          onChange={handleChange}
          autoComplete="name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && <p id="name-error" className={styles.error}>{errors.name}</p>}
      </div>

      <div className={styles.field}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          autoComplete="email"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && <p id="email-error" className={styles.error}>{errors.email}</p>}
      </div>

      <div className={styles.field}>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={values.message}
          onChange={handleChange}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && <p id="message-error" className={styles.error}>{errors.message}</p>}
      </div>

      <button type="submit" className={styles.submit} disabled={isSending}>
        {isSending ? 'Sending…' : 'Send message'}
      </button>

      {/* role="status": screen readers announce the message as soon as it appears */}
      <div role="status">
        {status === 'success' && (
          <p className={styles.success}>Thanks! Your message has been sent. I&apos;ll get back to you soon.</p>
        )}
        {status === 'error' && (
          <p className={styles.error}>
            Something went wrong. Please try again or email me at philipos793@gmail.com.
          </p>
        )}
      </div>
    </form>
  )
}

export default ContactForm

import DatePicker from '../components/DatePicker';

const meta = {
  title: 'Components/DatePicker',
  component: DatePicker,
  parameters: {
    // Optional parameter to center the component in the Canvas.
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // We can define controls for props if DatePicker had any props
  },
  args: {},
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  args: {},
};

export const InContainer = {
  args: {},
  decorators: [
    (Story) => (
      <div style={{ 
        padding: '20px', 
        backgroundColor: '#f5f5f5', 
        borderRadius: '8px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '200px'
      }}>
        <Story />
      </div>
    ),
  ],
};

export const WithBackground = {
  args: {},
  decorators: [
    (Story) => (
      <div style={{
        padding: '40px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: '12px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '300px'
      }}>
        <div style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
          <Story />
        </div>
      </div>
    ),
  ],
};

export const MultipleInstances = {
  args: {},
  decorators: [
    (Story) => (
      <div style={{ 
        display: 'flex',
        gap: '20px',
        padding: '20px',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ marginBottom: '10px', fontSize: '14px', color: '#666' }}>
            Start Date
          </h3>
          <Story />
        </div>
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ marginBottom: '10px', fontSize: '14px', color: '#666' }}>
            End Date
          </h3>
          <Story />
        </div>
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ marginBottom: '10px', fontSize: '14px', color: '#666' }}>
            Birth Date
          </h3>
          <Story />
        </div>
      </div>
    ),
  ],
};

export const InteractiveDemo = {
  args: {},
  decorators: [
    (Story) => (
      <div style={{
        padding: '30px',
        backgroundColor: '#f8f9fa',
        borderRadius: '12px',
        textAlign: 'center'
      }}>
        <h2 style={{ 
          marginBottom: '20px', 
          color: '#333',
          fontSize: '18px',
          fontWeight: '600'
        }}>
          DatePicker Component Demo
        </h2>
        <p style={{ 
          marginBottom: '20px', 
          color: '#666',
          fontSize: '14px'
        }}>
          Click on the input field to open the calendar and select a date
        </p>
        <Story />
        <div style={{ 
          marginTop: '20px',
          padding: '15px',
          backgroundColor: '#e3f2fd',
          borderRadius: '8px',
          fontSize: '12px',
          color: '#1976d2'
        }}>
          <strong>Features:</strong> Calendar navigation, Date selection, Month/Year navigation
        </div>
      </div>
    ),
  ],
};
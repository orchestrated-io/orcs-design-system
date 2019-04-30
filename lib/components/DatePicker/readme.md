Datepicker uses airbnb's react datepicker under the hood. This is just a wrapper to override styles, the only props you need to specify is either single or range. For all functionality and additional required props refer to documentation here: <https://github.com/airbnb/react-dates>

```js
<div>
  <Layout height="380px">
    <DatePicker single
                focused
                onDateChange={() => {}}
                onFocusChange={() => {}}
                numberOfMonths={1}
                displayFormat="DD/MM/YYYY"
              />
  </Layout>
  <Layout height="380px">
    <DatePicker range
                focusedInput="startDate"
                onDatesChange={() => {}}
                onFocusChange={() => {}}
                displayFormat="DD/MM/YYYY"
              />
  </Layout>
</div>
```

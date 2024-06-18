import css from './TransactionHistory.module.css'
export default function TransactionHistory({items}){
    return (
        <table className={css.table}>
  <thead>
    <tr className={css.headerRow}>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map(({id, type, amount, currency}, index)=>
    (<tr key={id} className={index % 2 === 0 ? css.row : css.alternateRow}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>))}
  </tbody>
</table>

    );
}

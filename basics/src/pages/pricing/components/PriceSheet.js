import React from 'react';
import classnames from 'classnames';
import './PriceSheet.css';
import PriceLineInput from './PriceLineInput';

/**
 * Component that render a single priceline.
 *
 * Renders cells like
 *
 * | name | rate | rate unit | result result unit |
 *
 * E.g.
 *
 * | Item Discount % | 1 | % | 0.1 EUR |
 *
 * If the rate is assignable render an input field for it.
 *
 */
function PriceLine({ priceLine, onAssign }) {
  const className = classnames({
    informational: priceLine.status.isInformational,
    invalid: priceLine.status.isInvalid,
    disabled: priceLine.status.isDisabled
  });
  return (
    <tr className={className}>
      <td>{priceLine.name}</td>
      <td className="align-right">
        {priceLine.rate.isAssignable && !priceLine.status.isDisabled ? (
          <PriceLineInput priceLine={priceLine} onAssign={onAssign} />
        ) : (
          priceLine.rate.value
        )}
      </td>
      <td>
        {priceLine.rate.unit}
        {priceLine.rate.batchSize ? '/' + priceLine.rate.batchSize.unit : ''}
      </td>
      <td className="align-right">
        {priceLine.result.value} {priceLine.result.unit}
      </td>
    </tr>
  );
}

/**
 * Component that renders a table for a price sheet
 *
 * A pricesheet consists of a number of pricelines. Each priceline is a row
 * in the table. The columns are made up of
 *
 * * name
 * * rate value
 * * rate unit
 * * total value and unit
 */
export default function PriceSheet({ priceSheet, onAssign }) {
  return (
    <table className="price-sheet-table">
      <colgroup>
        <col />
        <col width="20%" />
        <col width="10%" />
        <col width="200px" />
      </colgroup>
      <tbody>
        {priceSheet.priceLines.map(priceLine => (
          <PriceLine
            priceLine={priceLine}
            key={priceLine.id}
            onAssign={onAssign}
          />
        ))}
      </tbody>
    </table>
  );
}

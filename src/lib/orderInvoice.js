export const OrderInvoiceTemplate = ({ bookingData }) => {
	return `
		<div
			style={{
				maxWidth: "800px",
				margin: "auto",
				fontFamily: "Arial, sans-serif",
				border: "1px solid #ddd",
				padding: "20px",
			}}
		>
			<h2 style={{ textAlign: "center", marginBottom: "20px" }}>
				ORDER INVOICE
			</h2>
            
			<table
				width="100%"
				border="1"
				cellPadding="10"
				cellSpacing="0"
				style={{ borderCollapse: "collapse", textAlign: "left" }}
			>
				<thead style={{ background: "#f5f5f5" }}>
					<tr>
						<th>Service</th>
						<th>Hours/Days</th>
						<th>Total</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>${bookingData.serviceTitle}</td>
						<td>
							${bookingData.durationValue} ${bookingData.durationType}
						</td>
						<td>৳${bookingData.totalCost}</td>
					</tr>
				</tbody>
			</table>

			<p
				style={{
					marginTop: "30px",
					textAlign: "center",
					color: "#777",
				}}
			>
				Thank you for choosing Care Center ❤️
			</p>
		</div>`;
};

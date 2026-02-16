import { getSingleService } from "@/action/server/services";
import BookingForm from "@/components/BookingForm/BookingForm";
import PreviousPage from "@/components/buttons/PreviousPage";

const BookingPage = async ({ params }) => {
	const { serviceId } = await params;
	const service = await getSingleService(serviceId);

	return (
		<section className="section-padding bg-[#FCFAF7]">
			<div className="container">
				{/* Header */}
				<div className="mb-8">
					<PreviousPage />
					<h1 className="text-3xl font-bold text-(--foreground) mb-2">
						{service.title}
					</h1>
					<p className="text-(--muted-foreground)">
						{service.description}
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{/* Form */}
					<BookingForm
						service={{ ...service, _id: service._id.toString() }}
					/>
				</div>
			</div>
		</section>
	);
};

export default BookingPage;

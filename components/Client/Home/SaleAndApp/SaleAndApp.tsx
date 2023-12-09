import Wrapper from "@/components/Shared/ComponentWrapper/Wrapper";
import Sale from "./Sale/Sale";
import AppDownload from "./AppDownload";

const SaleAndApp = () => {
  return (
    <Wrapper>
      <div className="w-full grid lg:grid-cols-2 gap-4">
        <Sale />
        <AppDownload />
      </div>
    </Wrapper>
  );
};

export default SaleAndApp;

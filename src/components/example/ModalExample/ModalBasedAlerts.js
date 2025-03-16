"use client";
import { useModal } from "@/hooks/useModal";
import ComponentCard from "../../common/ComponentCard";
import { Modal } from "../../ui/modal";

export default function ModalBasedAlerts() {
  const successModal = useModal();
  const infoModal = useModal();
  const warningModal = useModal();
  const errorModal = useModal();

  return (
    <ComponentCard title="Modal Based Alerts">
      <div className="flex flex-wrap items-center gap-3">
        <button
          onClick={successModal.openModal}
          className="px-4 py-3 text-sm font-medium text-white rounded-lg bg-success-500 shadow-theme-xs hover:bg-success-600"
        >
          Success Alert
        </button>
        <button
          onClick={infoModal.openModal}
          className="px-4 py-3 text-sm font-medium text-white rounded-lg bg-blue-light-500 shadow-theme-xs hover:bg-blue-light-600"
        >
          Info Alert
        </button>
        <button
          onClick={warningModal.openModal}
          className="px-4 py-3 text-sm font-medium text-white rounded-lg bg-warning-500 shadow-theme-xs hover:bg-warning-600"
        >
          Warning Alert
        </button>
        <button
          onClick={errorModal.openModal}
          className="px-4 py-3 text-sm font-medium text-white rounded-lg bg-error-500 shadow-theme-xs hover:bg-error-600"
        >
          Danger Alert
        </button>
      </div>
      {/* Success Modal */}
      <Modal
        isOpen={successModal.isOpen}
        onClose={successModal.closeModal}
        className="max-w-[600px] p-5 lg:p-10"
      >
        <div className="text-center">
          <div className="relative flex items-center justify-center z-1 mb-7">
            <svg
              className="fill-success-50 dark:fill-success-500/15"
              width="90"
              height="90"
              viewBox="0 0 90 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M34.364 6.85053C38.6205 -2.28351 51.3795 -2.28351 55.636 6.85053C58.0129 11.951 63.5594 14.6722 68.9556 13.3853C78.6192 11.0807 86.5743 21.2433 82.2185 30.3287C79.7862 35.402 81.1561 41.5165 85.5082 45.0122C93.3019 51.2725 90.4628 63.9451 80.7747 66.1403C75.3648 67.3661 71.5265 72.2695 71.5572 77.9156C71.6123 88.0265 60.1169 93.6664 52.3918 87.3184C48.0781 83.7737 41.9219 83.7737 37.6082 87.3184C29.8831 93.6664 18.3877 88.0266 18.4428 77.9156C18.4735 72.2695 14.6352 67.3661 9.22531 66.1403C-0.462787 63.9451 -3.30193 51.2725 4.49185 45.0122C8.84391 41.5165 10.2138 35.402 7.78151 30.3287C3.42572 21.2433 11.3808 11.0807 21.0444 13.3853C26.4406 14.6722 31.9871 11.951 34.364 6.85053Z"
                fill=""
                fillOpacity=""
              />
            </svg>
            <span className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
              <svg
                className="fill-success-600 dark:fill-success-500"
                width="38"
                height="38"
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.9375 19.0004C5.9375 11.7854 11.7864 5.93652 19.0014 5.93652C26.2164 5.93652 32.0653 11.7854 32.0653 19.0004C32.0653 26.2154 26.2164 32.0643 19.0014 32.0643C11.7864 32.0643 5.9375 26.2154 5.9375 19.0004ZM19.0014 2.93652C10.1296 2.93652 2.9375 10.1286 2.9375 19.0004C2.9375 27.8723 10.1296 35.0643 19.0014 35.0643C27.8733 35.0643 35.0653 27.8723 35.0653 19.0004C35.0653 10.1286 27.8733 2.93652 19.0014 2.93652ZM24.7855 17.0575C25.3713 16.4717 25.3713 15.522 24.7855 14.9362C24.1997 14.3504 23.25 14.3504 22.6642 14.9362L17.7177 19.8827L15.3387 17.5037C14.7529 16.9179 13.8031 16.9179 13.2173 17.5037C12.6316 18.0894 12.6316 19.0392 13.2173 19.625L16.657 23.0647C16.9383 23.346 17.3199 23.504 17.7177 23.504C18.1155 23.504 18.4971 23.346 18.7784 23.0647L24.7855 17.0575Z"
                  fill=""
                />
              </svg>
            </span>
          </div>
          <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90 sm:text-title-sm">
            Well Done!
          </h4>
          <p className="text-sm leading-6 text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur. Feugiat ipsum libero tempor
            felis risus nisi non. Quisque eu ut tempor curabitur.
          </p>
          <div className="flex items-center justify-center w-full gap-3 mt-7">
            <button
              type="button"
              className="flex justify-center w-full px-4 py-3 text-sm font-medium text-white rounded-lg bg-success-500 shadow-theme-xs hover:bg-success-600 sm:w-auto"
            >
              Okay, Got It
            </button>
          </div>
        </div>
      </Modal>
      {/* Info Modal */}
      <Modal
        isOpen={infoModal.isOpen}
        onClose={infoModal.closeModal}
        className="max-w-[600px] p-5 lg:p-10"
      >
        <div className="text-center">
          <div className="relative flex items-center justify-center z-1 mb-7">
            <svg
              className="fill-blue-light-50 dark:fill-blue-light-500/15"
              width="90"
              height="90"
              viewBox="0 0 90 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M34.364 6.85053C38.6205 -2.28351 51.3795 -2.28351 55.636 6.85053C58.0129 11.951 63.5594 14.6722 68.9556 13.3853C78.6192 11.0807 86.5743 21.2433 82.2185 30.3287C79.7862 35.402 81.1561 41.5165 85.5082 45.0122C93.3019 51.2725 90.4628 63.9451 80.7747 66.1403C75.3648 67.3661 71.5265 72.2695 71.5572 77.9156C71.6123 88.0265 60.1169 93.6664 52.3918 87.3184C48.0781 83.7737 41.9219 83.7737 37.6082 87.3184C29.8831 93.6664 18.3877 88.0266 18.4428 77.9156C18.4735 72.2695 14.6352 67.3661 9.22531 66.1403C-0.462787 63.9451 -3.30193 51.2725 4.49185 45.0122C8.84391 41.5165 10.2138 35.402 7.78151 30.3287C3.42572 21.2433 11.3808 11.0807 21.0444 13.3853C26.4406 14.6722 31.9871 11.951 34.364 6.85053Z"
                fill=""
                fillOpacity=""
              />
            </svg>
            <span className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
              <svg
                className="fill-blue-light-500 dark:fill-blue-light-500"
                width="38"
                height="38"
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.85547 18.9998C5.85547 11.7396 11.7411 5.854 19.0013 5.854C26.2615 5.854 32.1471 11.7396 32.1471 18.9998C32.1471 26.2601 26.2615 32.1457 19.0013 32.1457C11.7411 32.1457 5.85547 26.2601 5.85547 18.9998ZM19.0013 2.854C10.0842 2.854 2.85547 10.0827 2.85547 18.9998C2.85547 27.9169 10.0842 35.1457 19.0013 35.1457C27.9184 35.1457 35.1471 27.9169 35.1471 18.9998C35.1471 10.0827 27.9184 2.854 19.0013 2.854ZM16.9999 11.9145C16.9999 13.0191 16.1045 13.9145 15 13.9145L14.9984 13.9145C13.8939 13.9145 13 13.0191 13 11.9145C13 10.81 13.8939 9.91454 14.9984 9.91454L15 9.91454C16.1045 9.91454 16.9999 10.81 16.9999 11.9145ZM19.0014 27.8171C18.173 27.8171 17.5014 27.1455 17.5014 26.3171V17.3293C17.5014 16.5008 18.173 15.8293 19.0014 15.8293C19.8299 15.8293 20.5014 16.5008 20.5014 17.3293L20.5014 26.3171C20.5014 27.1455 19.8299 27.8171 19.0014 27.8171ZM3.04199 10.0003C3.04199 6.77289 5.23988 4.05695 8.22173 3.27114L7.83948 1.82066C4.21532 2.77574 1.54199 6.07486 1.54199 10.0003H3.04199ZM6.99707 7.08524C6.99707 5.52854 7.5971 4.11366 8.57989 3.05657L7.48132 2.03522C6.25073 3.35885 5.49707 5.13487 5.49707 7.08524H6.99707Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </div>
          <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90 sm:text-title-sm">
            Danger Alert!
          </h4>
          <p className="text-sm leading-6 text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur. Feugiat ipsum libero tempor
            felis risus nisi non. Quisque eu ut tempor curabitur.
          </p>
          <div className="flex items-center justify-center w-full gap-3 mt-7">
            <button
              type="button"
              className="flex justify-center w-full px-4 py-3 text-sm font-medium text-white rounded-lg bg-error-500 shadow-theme-xs hover:bg-error-600 sm:w-auto"
            >
              Okay, Got It
            </button>
          </div>
        </div>
      </Modal>
    </ComponentCard>
  );
}

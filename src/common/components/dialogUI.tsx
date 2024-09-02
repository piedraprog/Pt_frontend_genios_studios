
import { Button } from "@/components/ui/button";
import { DialogHeader, DialogFooter } from "@/components/ui/dialog";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@radix-ui/react-dialog";
import { ChevronLeft } from "lucide-react";

interface IProps {
  open?: boolean;
  setOpen?: (value: boolean) => void;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  labelCancel?: string;
  labelConfirm?: string;
  onCancel?: () => void;
  onConfirm?: () => void;
  cancelVariant?:
  | "link"
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost";
  classNameContent?: string;
  backVariant?: "top" | "bottom";
}
const DialogComponent: React.FC<IProps> = ({
  open,
  setOpen,
  title,
  description,
  children,
  labelCancel = "Cancelar",
  labelConfirm = "Confirmar",
  cancelVariant = "destructive",
  onCancel,
  onConfirm,
  backVariant = "bottom",
  classNameContent = "",
}) => {
  const handleOnCancel = () => {
    if (onCancel) {
      onCancel();
      return;
    }

    setOpen && setOpen(false);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-min">
        {(title || description) && (
          <DialogHeader>
            <div className="flex">
              {backVariant === "top" && (
                <div className="flex">
                  <Button
                    variant="ghost"
                    onClick={handleOnCancel}
                    size="icon"
                    className="w-6 h-6 rounded-full top-[-2.7px] relative"
                  >
                    <ChevronLeft size={22} />
                  </Button>
                </div>
              )}
              <div>
                {title && <DialogTitle>{title}</DialogTitle>}
                {description && (
                  <DialogDescription>{description}</DialogDescription>
                )}
              </div>
            </div>
          </DialogHeader>
        )}

        <div
          className={`min-w-[80vw] md:min-w-[50vw]  lg:min-w-[30vw] max-h-[65vh] overflow-auto ${classNameContent}`}
        >
          {children}
        </div>
        <DialogFooter>
          {onCancel && backVariant === "bottom" && (
            <Button
              variant={cancelVariant}
              className={`${!onConfirm ? "w-full" : ""}`}
              onClick={handleOnCancel}
            >
              {labelCancel}
            </Button>
          )}
          {onConfirm && (
            <Button
              className={`${!onCancel ? "w-full" : ""}`}
              onClick={() => onConfirm()}
            >
              {labelConfirm}
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogComponent;

export const DialogButtonsFooter = ({
  onCancel,
  onConfirm,
  labelCancel,
  labelConfirm,
  setOpen,
}: {
  onCancel?: () => void;
  onConfirm?: () => void;
  labelCancel?: string;
  labelConfirm?: string;
  setOpen: (open: boolean) => void;
}) => {
  return (
    <DialogFooter>
      {onCancel && (
        <Button
          variant="destructive"
          className={`${!onConfirm ? "w-full" : ""}`}
          onClick={() => {
            onCancel();
            setOpen(false);
          }}
        >
          {labelCancel}
        </Button>
      )}
      {onConfirm && (
        <Button
          className={`${!onCancel ? "w-full" : ""}`}
          onClick={() => onConfirm()}
        >
          {labelConfirm}
        </Button>
      )}
    </DialogFooter>
  );
};

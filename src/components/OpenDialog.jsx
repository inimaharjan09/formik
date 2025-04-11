import { Button, Dialog, DialogHeader, DialogBody, DialogFooter, IconButton, } from "@material-tailwind/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTodo } from "../pages/todo/todoSlice";

export function OpenDialog({ index }) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleOpen = () => setOpen(!open);

  const handleRemove = () => {
    dispatch(removeTodo(index));
    handleOpen();
  }
  return (
    <>
      <IconButton
        onClick={handleOpen}

        color="pink" size="sm">
        <i className="fas fa-trash" />
      </IconButton>
      <Dialog
        size="sm"
        className="opacity-65 backdrop-grayscale-100 backdrop-opacity-90 shadow-blue-200 drop-shadow-xl"
        open={open} handler={handleOpen}>
        <DialogHeader>Its a simple dialog.</DialogHeader>
        <DialogBody>
          The key to more success is to have a lot of pillows. Put it this way,
          it took me twenty five years to get these plants, twenty five years of
          blood sweat and tears, and I&apos;m never giving up, I&apos;m just
          getting started. I&apos;m up to something. Fan luv.
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleRemove}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { Clock, Star, Users } from 'lucide-react';
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface ReservationModalProps {
  trigger: React.ReactNode;
}

export const ReservationModal = ({ trigger }: ReservationModalProps) => {
  const [date, setDate] = useState<Date>();
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOpen(false);
    toast({
      title: "Table Requested",
      description: "We'll confirm your reservation via email shortly.",
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-[#F9F7F2] border-none shadow-2xl">
        <DialogHeader className="text-center space-y-4 pb-6 border-b border-border/20">
          <DialogTitle className="font-display text-3xl text-foreground">Secure Your Table</DialogTitle>
          <DialogDescription className="text-muted-foreground font-light">
            Join us at the pier. Reservations recommended for dinner service.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-6 py-6">
          
          <div className="grid gap-2">
            <Label htmlFor="guests">Party Size</Label>
            <Select>
              <SelectTrigger className="bg-white border-border/50">
                <SelectValue placeholder="Select guests" />
              </SelectTrigger>
              <SelectContent>
                {[1,2,3,4,5,6,7,8].map(num => (
                  <SelectItem key={num} value={num.toString()}>{num} {num === 1 ? 'Guest' : 'Guests'}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label>Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal bg-white border-border/50",
                    !date && "text-muted-foreground"
                  )}
                >
                  <Star className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  className="rounded-md border bg-white"
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="time">Time</Label>
            <Select>
              <SelectTrigger className="bg-white border-border/50">
                <SelectValue placeholder="Select time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="17:00">5:00 PM</SelectItem>
                <SelectItem value="18:00">6:00 PM</SelectItem>
                <SelectItem value="19:00">7:00 PM</SelectItem>
                <SelectItem value="20:00">8:00 PM</SelectItem>
                <SelectItem value="21:00">9:00 PM</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="email">Contact Email</Label>
            <Input id="email" type="email" placeholder="captain@example.com" className="bg-white border-border/50" required />
          </div>

          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-6 text-lg mt-2">
            Confirm Request
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ReservationModal;

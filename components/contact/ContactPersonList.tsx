import { MdEmail, MdPhone } from "react-icons/md";
import type { ContactPerson } from "@/types/contact";

export default function ContactPersonList({ persons }: { persons: ContactPerson[] }) {
  return (
    <div className="grid gap-16">
      {persons.map((person) => (
        <div key={person.id} className="space-y-2">
          <h3 className="text-xl font-medium">{person.title}</h3>
          <p className="text-sm text-gray-300">{person.description}</p>
          <div className="flex items-center gap-2 text-sm">
            <MdEmail className="w-4 h-4 flex-shrink-0" />
            <a href={`mailto:${person.email}`} className="hover:underline transition-colors">
              {person.email}
            </a>
          </div>
          {person.phoneNumber && (
            <div className="flex items-center gap-2 text-sm">
              <MdPhone className="w-4 h-4 flex-shrink-0" />
              <a href={`tel:${person.phoneNumber}`} className="hover:underline transition-colors">
                {person.phoneNumber}
              </a>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

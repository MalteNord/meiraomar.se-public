import { TrashIcon } from "@sanity/icons";
import type { DocumentActionComponent } from "sanity";
import { useClient } from "sanity";

export const deleteAllContactSubmissions: DocumentActionComponent = (props) => {
  const { type } = props;
  const client = useClient({ apiVersion: "2022-06-01" });

  // Only show this action on contactSubmission documents
  if (type !== "contactSubmission") {
    return null;
  }

  return {
    label: "Delete All Submissions",
    icon: TrashIcon,
    tone: "critical",
    onHandle: async () => {
      // Get all contact submission IDs
      const submissionIds = await client.fetch<string[]>(`*[_type == "contactSubmission"]._id`);

      if (submissionIds.length === 0) {
        props.onComplete();
        return;
      }

      // Show confirmation dialog
      const confirmed = window.confirm(
        `Are you sure you want to delete all ${submissionIds.length} contact submission(s)? This action cannot be undone.`
      );

      if (!confirmed) {
        props.onComplete();
        return;
      }

      try {
        // Delete all submissions using a transaction
        const transaction = client.transaction();
        for (const id of submissionIds) {
          transaction.delete(id);
        }

        await transaction.commit();

        // Show success message and close
        alert(`Successfully deleted ${submissionIds.length} submission(s)`);
        props.onComplete();
      } catch (error) {
        console.error("Error deleting submissions:", error);
        alert("Failed to delete submissions. Please try again.");
        props.onComplete();
      }
    },
  };
};

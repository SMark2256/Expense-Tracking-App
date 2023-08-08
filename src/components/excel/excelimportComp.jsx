import { useSelector, useDispatch } from "react-redux";
import { read, utils, writeFile } from "xlsx";
import { setFile } from "../../redux/actions";
import { useEffect } from "react";
const ExcelimportComp = () => {
    const excelFile = useSelector((state) => state.file);
    const dispatch = useDispatch();

    const handleImport = ($event) => {
        const files = $event.target.files;
        if (files.length) {
            const file = files[0];
            const reader = new FileReader();
            reader.onload = (event) => {
                const wb = read(event.target.result);
                const sheets = wb.SheetNames;

                if (sheets.length) {
                    const rows = utils.sheet_to_json(wb.Sheets[sheets[0]], {
                        raw: false, // Ensure that cell values are not treated as raw data
                        dateNF: "yyyy-mm-dd", // Optional: Specify date format if needed
                    });

                    // Convert cell values to strings
                    const rowsAsString = rows.map((row) =>
                        Object.keys(row).reduce((acc, key) => {
                            acc[key] = String(row[key]);
                            return acc;
                        }, {})
                    );

                    dispatch(setFile(rowsAsString));
                }
            };
            reader.readAsArrayBuffer(file);
        }
    };

    useEffect(() => {
        console.log(excelFile);
    }, [excelFile]);

    return (
        <div className="flex flex-col gap-4">
            {excelFile.length === 0 && (
                <div>
                    <h1 className="text-3xl w-full flex justify-center">
                        ExcelFile
                    </h1>
                    <input
                        type="file"
                        name="file"
                        className="custom-file-input"
                        id="inputGroupFile"
                        required
                        onChange={handleImport}
                        accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                    />
                </div>
            )}
            {excelFile.length ? (
                <div className="grid grid-cols-2 gap-2 select-none text-xl ps-4 pe-4">
                    {Object.assign(excelFile).map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col grid-cols-1 border border-black p-4 gap-2 hover:bg-black/10"
                        >
                            {Object.keys(item).map((key, index) => (
                                <div key={index} className="text-start">
                                    {key}:{" "}
                                    {key === "Értéknap"
                                        ? new Date(
                                              item[key]
                                          ).toLocaleDateString()
                                        : item[key]}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            ) : null}
        </div>
    );
};

export default ExcelimportComp;
